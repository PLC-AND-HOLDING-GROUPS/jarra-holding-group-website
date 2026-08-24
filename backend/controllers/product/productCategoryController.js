"use strict";
const { ProductCategory } = require("../../models");

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await ProductCategory.findAll({
            order: [["created_at", "DESC"]]
        });
        return res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error("Get Categories Error:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch categories" });
    }
};

// Get single category
exports.getCategoryById = async (req, res) => {
    try {
        const category = await ProductCategory.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        return res.status(200).json({ success: true, data: category });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch category" });
    }
};

// Create category
exports.createCategory = async (req, res) => {
    try {
        const { name, slug, description } = req.body;
        const category = await ProductCategory.create({ name, slug, description });
        return res.status(201).json({ success: true, message: "Category created", data: category });
    } catch (error) {
        console.error("Create Category Error:", error);
        return res.status(500).json({ success: false, message: "Failed to create category", error: error.message });
    }
};

// Update category
exports.updateCategory = async (req, res) => {
    try {
        const category = await ProductCategory.findByPk(req.params.id);
        if (!category) return res.status(404).json({ success: false, message: "Category not found" });

        await category.update(req.body);
        return res.status(200).json({ success: true, message: "Category updated", data: category });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to update category" });
    }
};

// Delete category
exports.deleteCategory = async (req, res) => {
    try {
        const category = await ProductCategory.findByPk(req.params.id);
        if (!category) return res.status(404).json({ success: false, message: "Category not found" });

        await category.destroy();
        return res.status(200).json({ success: true, message: "Category deleted" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to delete category" });
    }
};
