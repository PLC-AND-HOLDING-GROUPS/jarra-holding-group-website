"use strict";
const express = require("express");
const router = express.Router();
const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");

const {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
} = require("../../controllers/contact/messageController");

const {
  validateCreateMessage,
} = require("../../validators/contact/messageValidator");

const { contactLimiter } = require("../../middlewares/rateLimitMiddleware");

// ================= MESSAGE ROUTES =================

// Public route (contact form submission)
router.post("/", contactLimiter, validateCreateMessage, createMessage);

// Admin routes
router.get("/", authenticateToken, getAllMessages);
router.get("/:id", authenticateToken, getMessageById);
router.delete("/:id", authenticateToken, checkPermission("contact_messages", "delete"), deleteMessage);

module.exports = router;
