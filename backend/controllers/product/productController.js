"use strict";
const { Product, ProductCategory, ProductAttachment, Attachment, sequelize } = require("../../models");
const { v4: uuidv4 } = require("uuid");

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const { category } = req.query; // optional filter by category slug
        
        let includeCategory = { model: ProductCategory, as: "category" };
        if (category && category !== "all") {
            includeCategory.where = { slug: category };
        }

        const products = await Product.findAll({
            include: [
                includeCategory,
                { 
                    model: ProductAttachment, 
                    as: "attachments",
                    include: [{ model: Attachment, as: "attachment" }]
                }
            ],
            order: [["created_at", "DESC"]]
        });
        
        return res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Get Products Error:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch products" });
    }
};

// Get single product by slug or id
exports.getProduct = async (req, res) => {
    try {
        const { identifier } = req.params; // can be slug or id
        
        let whereClause = {};
        // Simple regex to check if it's a UUID
        const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(identifier);
        
        if (isUuid) {
            whereClause = { product_id: identifier };
        } else {
            whereClause = { slug: identifier };
        }

        const product = await Product.findOne({
            where: whereClause,
            include: [
                { model: ProductCategory, as: "category" },
                { 
                    model: ProductAttachment, 
                    as: "attachments",
                    include: [{ model: Attachment, as: "attachment" }]
                }
            ]
        });

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.error("Get Product Error:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch product" });
    }
};

// Create Product
exports.createProduct = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const { name, slug, category_id, short_description, full_description, status, publish_status, specifications, applications, attachments } = req.body;

        const product = await Product.create(
            {
                name, slug, category_id, short_description, full_description, status,
                publish_status: publish_status || 'draft',
                specifications: specifications || {},
                applications: applications || []
            },
            { transaction: t }
        );

        // Handle attachments (Array of { attachment_id, category: 'main' | 'gallery' })
        if (Array.isArray(attachments) && attachments.length > 0) {
            const attachmentRows = attachments.map(att => ({
                product_attachment_id: uuidv4(),
                product_id: product.product_id,
                attachment_id: att.attachment_id,
                category: att.category || "gallery",
            }));
            await ProductAttachment.bulkCreate(attachmentRows, { transaction: t });
        }

        await t.commit();
        
        const createdProduct = await Product.findByPk(product.product_id, {
            include: [
                { model: ProductCategory, as: "category" },
                { model: ProductAttachment, as: "attachments", include: [{ model: Attachment, as: "attachment" }] }
            ]
        });

        return res.status(201).json({ success: true, message: "Product created", data: createdProduct });
    } catch (error) {
        await t.rollback();
        console.error("Create Product Error:", error);
        return res.status(500).json({ success: false, message: "Failed to create product", error: error.message });
    }
};

// Update Product
exports.updateProduct = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            await t.rollback();
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        const { name, slug, category_id, short_description, full_description, status, publish_status, specifications, applications, attachments } = req.body;

        await product.update(
            {
                name, slug, category_id, short_description, full_description, status,
                publish_status: publish_status !== undefined ? publish_status : product.publish_status,
                specifications: specifications !== undefined ? specifications : product.specifications,
                applications: applications !== undefined ? applications : product.applications
            },
            { transaction: t }
        );

        // Update attachments if provided
        if (attachments) {
            // Remove old attachments
            await ProductAttachment.destroy({ where: { product_id: product.product_id }, transaction: t });
            
            // Add new ones
            if (Array.isArray(attachments) && attachments.length > 0) {
                const attachmentRows = attachments.map(att => ({
                    product_attachment_id: uuidv4(),
                    product_id: product.product_id,
                    attachment_id: att.attachment_id,
                    category: att.category || "gallery",
                }));
                await ProductAttachment.bulkCreate(attachmentRows, { transaction: t });
            }
        }

        await t.commit();

        const updatedProduct = await Product.findByPk(product.product_id, {
            include: [
                { model: ProductCategory, as: "category" },
                { model: ProductAttachment, as: "attachments", include: [{ model: Attachment, as: "attachment" }] }
            ]
        });

        return res.status(200).json({ success: true, message: "Product updated", data: updatedProduct });
    } catch (error) {
        await t.rollback();
        console.error("Update Product Error:", error);
        return res.status(500).json({ success: false, message: "Failed to update product" });
    }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ success: false, message: "Product not found" });

        await product.destroy();
        return res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.error("Delete Product Error:", error);
        return res.status(500).json({ success: false, message: "Failed to delete product" });
    }
};
