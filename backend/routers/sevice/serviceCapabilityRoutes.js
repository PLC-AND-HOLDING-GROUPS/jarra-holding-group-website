const express = require("express");
const router = express.Router();
const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createOrUpdateServiceCapability,
    getServiceCapability
} = require("../../controllers/service/serviceCapabilityController");

router.post("/", authenticateToken, checkPermission("services", "create"), createOrUpdateServiceCapability);
router.get("/", getServiceCapability);

module.exports = router;
