"use strict";

const express = require("express");
const router = express.Router();
const {
    submitApplication,
    getApplicationsByVacancy,
    getApplicationById,
    updateApplicationStatus,
    updateApplicationFeedback
} = require("../../controllers/contact/jobApplicationController");

// We need auth middleware for the admin routes
const { authenticateToken } = require("../../middlewares/authMiddleware");

// Public Route: Submit an application
router.post("/", submitApplication);

// Admin Routes: Manage applications (require authentication)
router.get("/vacancy/:vacancyId", authenticateToken, getApplicationsByVacancy);
router.get("/:id", authenticateToken, getApplicationById);
router.put("/:id/status", authenticateToken, updateApplicationStatus);
router.put("/:id/feedback", authenticateToken, updateApplicationFeedback);

module.exports = router;
