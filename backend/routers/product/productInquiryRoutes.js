"use strict";
const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");
const productInquiryController = require("../../controllers/product/productInquiryController");
const { productInquiryLimiter } = require("../../middlewares/rateLimitMiddleware");
const { validateProductInquiry } = require("../../validators/product/productInquiryValidator");

router.get("/", productInquiryController.getAllInquiries);
router.get("/:id", productInquiryController.getInquiryById);
router.post("/", productInquiryLimiter, validateProductInquiry, productInquiryController.submitInquiry);
router.put("/:id/status", authenticateToken, checkPermission("product_inquiries", "update"), productInquiryController.updateInquiryStatus);
router.delete("/:id", authenticateToken, checkPermission("product_inquiries", "delete"), productInquiryController.deleteInquiry);
router.post("/:id/reply", authenticateToken, checkPermission("product_inquiries", "reply"), productInquiryController.replyToInquiry);

module.exports = router;
