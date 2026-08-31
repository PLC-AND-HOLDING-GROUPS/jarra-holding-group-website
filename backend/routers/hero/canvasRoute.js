"use strict";

const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../../middlewares/authMiddleware");

const {
    createOrUpdateCanvas,
    getCanvas,
} = require("../../controllers/hero/canvasController");

// ================= CANVAS ROUTES =================

router.get("/", getCanvas);
router.post("/", authenticateToken, createOrUpdateCanvas);

module.exports = router;
