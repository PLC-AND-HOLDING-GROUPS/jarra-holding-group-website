"use strict";

const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createSlider,
    getAllSliders,
    getSliderById,
    updateSlider,
    deleteSlider,
} = require("../../controllers/hero/sliderController");

const {
    validateCreateSlider,
    validateUpdateSlider,
    validateSliderId,
} = require("../../validators/hero/sliderValidator");

// Public
router.get("/", getAllSliders);
router.get("/:id", validateSliderId, getSliderById);

// Admin
router.post("/", authenticateToken, checkPermission("hero", "create"), validateCreateSlider, createSlider);
router.put("/:id", authenticateToken,
    checkPermission("hero", "update"), validateSliderId,
    validateUpdateSlider,
    updateSlider
);
router.delete("/:id", authenticateToken, checkPermission("hero", "delete"), validateSliderId, deleteSlider);

module.exports = router;