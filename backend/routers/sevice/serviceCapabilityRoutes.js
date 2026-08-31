const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middlewares/authMiddleware");

const {
    createOrUpdateServiceCapability,
    getServiceCapability
} = require("../../controllers/service/serviceCapabilityController");

router.post("/", authenticateToken, createOrUpdateServiceCapability);
router.get("/", getServiceCapability);

module.exports = router;
