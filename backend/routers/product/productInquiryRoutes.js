"use strict";
const express = require("express");
const router = express.Router();
const productInquiryController = require("../../controllers/product/productInquiryController");

router.get("/", productInquiryController.getAllInquiries);
router.get("/:id", productInquiryController.getInquiryById);
router.post("/", productInquiryController.submitInquiry);
router.put("/:id/status", productInquiryController.updateInquiryStatus);
router.delete("/:id", productInquiryController.deleteInquiry);

module.exports = router;
