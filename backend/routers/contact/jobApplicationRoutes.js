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
const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");
const { jobApplicationLimiter } = require("../../middlewares/rateLimitMiddleware");
const { validateCreateApplication } = require("../../validators/contact/jobApplicationValidator");

// Public Route: Submit an application
router.post("/", jobApplicationLimiter, validateCreateApplication, submitApplication);

// Admin Routes: Manage applications (require authentication)
router.get("/vacancy/:vacancyId", authenticateToken, getApplicationsByVacancy);
router.get("/:id", authenticateToken, getApplicationById);
router.put("/:id/status", authenticateToken, checkPermission("vacancies", "update"), updateApplicationStatus);
router.put("/:id/feedback", authenticateToken, checkPermission("vacancies", "update"), updateApplicationFeedback);

module.exports = router;
