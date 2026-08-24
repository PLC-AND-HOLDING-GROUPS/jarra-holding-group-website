"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product/productController");

router.get("/", productController.getAllProducts);
router.get("/:identifier", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
