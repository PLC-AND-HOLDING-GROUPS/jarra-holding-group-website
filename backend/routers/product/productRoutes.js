"use strict";
const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");
const productController = require("../../controllers/product/productController");

router.get("/", productController.getAllProducts);
router.get("/:identifier", productController.getProduct);
router.post("/", authenticateToken, checkPermission("products", "create"), productController.createProduct);
router.put("/:id", authenticateToken, checkPermission("products", "update"), productController.updateProduct);
router.delete("/:id", authenticateToken, checkPermission("products", "delete"), productController.deleteProduct);

module.exports = router;
