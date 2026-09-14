"use strict";

const express = require("express");
const router = express.Router();
const businessController = require("../../controllers/business/businessController");
// Assuming there might be an auth middleware to protect the routes. 
// For now, these are standard endpoints. You can add middleware later if needed.

const importExportController = require("../../controllers/business/importExportController");

// Overview routes
router.get("/overview", businessController.getOverview);
router.put("/overview", businessController.updateOverview); // usually protected

// Node routes
router.get("/nodes", businessController.getNodes);
router.post("/nodes", businessController.createNode); // usually protected
router.put("/nodes/:id", businessController.updateNode); // usually protected
router.delete("/nodes/:id", businessController.deleteNode); // usually protected

// Import/Export Overview routes
router.get("/import-export/overview", importExportController.getOverview);
router.put("/import-export/overview", importExportController.updateOverview);

// Import/Export Category routes
router.get("/import-export/categories", importExportController.getCategories);
router.post("/import-export/categories", importExportController.createCategory);
router.put("/import-export/categories/:id", importExportController.updateCategory);
router.delete("/import-export/categories/:id", importExportController.deleteCategory);

// Import/Export Step routes
router.get("/import-export/steps", importExportController.getSteps);
router.post("/import-export/steps", importExportController.createStep);
router.put("/import-export/steps/:id", importExportController.updateStep);
router.delete("/import-export/steps/:id", importExportController.deleteStep);

const warehouseController = require("../../controllers/business/warehouseController");

// Warehouse routes
router.get("/warehouses/overview", warehouseController.getOverview);
router.put("/warehouses/overview", warehouseController.updateOverview);

router.post("/warehouses/reorder", warehouseController.reorderWarehouses);

router.get("/warehouses", warehouseController.getAllWarehouses);
router.post("/warehouses", warehouseController.createWarehouse);
router.put("/warehouses/:id", warehouseController.updateWarehouse);
router.delete("/warehouses/:id", warehouseController.deleteWarehouse);
router.post("/warehouses/:id/images", warehouseController.addWarehouseImage);
router.delete("/warehouses/images/:imageId", warehouseController.deleteWarehouseImage);

const tradingController = require("../../controllers/business/tradingController");

// Trading routes
router.get("/trading/overview", tradingController.getTradingOverview);
router.put("/trading/overview", tradingController.updateTradingOverview);

module.exports = router;
