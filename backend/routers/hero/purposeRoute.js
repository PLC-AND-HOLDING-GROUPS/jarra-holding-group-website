"use strict";

const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createOrUpdatePurpose,
    getPurpose,
} = require("../../controllers/hero/purposeController");

// ================= PURPOSE ROUTES =================

router.get("/", getPurpose);
router.post("/", authenticateToken, checkPermission("hero", "create"), createOrUpdatePurpose);

module.exports = router;
