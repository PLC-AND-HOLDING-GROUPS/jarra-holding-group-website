"use strict";
const { ProductInquiry, Product } = require("../../models");

// Get all inquiries (Admin)
exports.getAllInquiries = async (req, res) => {
    try {
        const inquiries = await ProductInquiry.findAll({
            include: [{ model: Product, as: 'product', attributes: ['name', 'slug'] }],
            order: [["created_at", "DESC"]]
        });
        return res.status(200).json({ success: true, data: inquiries });
    } catch (error) {
        console.error("Get Inquiries Error:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch inquiries" });
    }
};

// Get single inquiry
exports.getInquiryById = async (req, res) => {
    try {
        const inquiry = await ProductInquiry.findByPk(req.params.id, {
            include: [{ model: Product, as: 'product', attributes: ['name', 'slug'] }]
        });
        if (!inquiry) return res.status(404).json({ success: false, message: "Inquiry not found" });
        return res.status(200).json({ success: true, data: inquiry });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to fetch inquiry" });
    }
};

// Submit inquiry (Public)
exports.submitInquiry = async (req, res) => {
    try {
        const { product_id, name, company, email, phone, quantity, message } = req.body;
        
        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        const inquiry = await ProductInquiry.create({
            product_id, name, company, email, phone, quantity, message
        });

        return res.status(201).json({ success: true, message: "Inquiry submitted successfully", data: inquiry });
    } catch (error) {
        console.error("Submit Inquiry Error:", error);
        return res.status(500).json({ success: false, message: "Failed to submit inquiry", error: error.message });
    }
};

// Update inquiry status (Admin)
exports.updateInquiryStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const inquiry = await ProductInquiry.findByPk(req.params.id);
        
        if (!inquiry) return res.status(404).json({ success: false, message: "Inquiry not found" });
        
        await inquiry.update({ status });
        return res.status(200).json({ success: true, message: "Inquiry status updated", data: inquiry });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to update inquiry" });
    }
};

// Delete inquiry
exports.deleteInquiry = async (req, res) => {
    try {
        const inquiry = await ProductInquiry.findByPk(req.params.id);
        if (!inquiry) return res.status(404).json({ success: false, message: "Inquiry not found" });

        await inquiry.destroy();
        return res.status(200).json({ success: true, message: "Inquiry deleted" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to delete inquiry" });
    }
};

// Reply to inquiry
const { sendEmail } = require("../../utils/sendEmail");
exports.replyToInquiry = async (req, res) => {
    try {
        const { subject, message } = req.body;
        const inquiry = await ProductInquiry.findByPk(req.params.id);
        
        if (!inquiry) return res.status(404).json({ success: false, message: "Inquiry not found" });
        
        // Send email
        await sendEmail(inquiry.email, subject, message);
        
        // Update status to replied
        await inquiry.update({ status: "replied" });
        
        return res.status(200).json({ success: true, message: "Reply sent successfully", data: inquiry });
    } catch (error) {
        console.error("Reply to Inquiry Error:", error);
        return res.status(500).json({ success: false, message: "Failed to send reply", error: error.message });
    }
};
