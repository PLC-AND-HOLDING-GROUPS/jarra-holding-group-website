"use strict";

const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createCard,
    getAllCards,
    getCardById,
    updateCard,
    deleteCard,
} = require("../../controllers/hero/cardController");

const {
    validateCreateCard,
    validateUpdateCard,
    validateCardId,
} = require("../../validators/hero/cardValidator");

// ================= CARD ROUTES =================

// Public (optional - if cards are public like website content)
router.get("/", getAllCards);
router.get("/:id", validateCardId, getCardById);

// Admin protected routes
router.post("/", authenticateToken, checkPermission("hero", "create"), validateCreateCard, createCard);
router.put("/:id", authenticateToken,
    checkPermission("hero", "update"), validateCardId,
    validateUpdateCard,
    updateCard
);
router.delete("/:id", authenticateToken, checkPermission("hero", "delete"), validateCardId, deleteCard);

module.exports = router;