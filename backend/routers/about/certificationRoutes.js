"use strict";
const express = require("express");
const router = express.Router();
const {
    createCertification,
    getAllCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification,
} = require("../../controllers/about/certificationController");

const { authenticateToken } = require("../../middlewares/authMiddleware");

// Public Routes
router.get("/", getAllCertifications);
router.get("/:id", getCertificationById);

// Protected Routes
router.use(authenticateToken);
router.post("/", createCertification);
router.put("/:id", updateCertification);
router.delete("/:id", deleteCertification);

module.exports = router;
