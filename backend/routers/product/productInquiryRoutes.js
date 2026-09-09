"use strict";
const express = require("express");
const router = express.Router();
const productInquiryController = require("../../controllers/product/productInquiryController");
const { productInquiryLimiter } = require("../../middlewares/rateLimitMiddleware");
const { validateProductInquiry } = require("../../validators/product/productInquiryValidator");

router.get("/", productInquiryController.getAllInquiries);
router.get("/:id", productInquiryController.getInquiryById);
router.post("/", productInquiryLimiter, validateProductInquiry, productInquiryController.submitInquiry);
router.put("/:id/status", productInquiryController.updateInquiryStatus);
router.delete("/:id", productInquiryController.deleteInquiry);
router.post("/:id/reply", productInquiryController.replyToInquiry);

module.exports = router;
