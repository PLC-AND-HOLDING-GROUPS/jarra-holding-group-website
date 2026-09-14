"use strict";
const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");
const productCategoryController = require("../../controllers/product/productCategoryController");

router.get("/", productCategoryController.getAllCategories);
router.get("/:id", productCategoryController.getCategoryById);
router.post("/", authenticateToken, checkPermission("product_categories", "create"), productCategoryController.createCategory);
router.put("/:id", authenticateToken, checkPermission("product_categories", "update"), productCategoryController.updateCategory);
router.delete("/:id", authenticateToken, checkPermission("product_categories", "delete"), productCategoryController.deleteCategory);

module.exports = router;
