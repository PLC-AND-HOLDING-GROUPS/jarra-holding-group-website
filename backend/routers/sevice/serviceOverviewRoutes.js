const express = require("express");
const router = express.Router();
const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createOrUpdateServiceOverview,
    getServiceOverview
} = require("../../controllers/service/serviceOverviewController");

router.post("/", authenticateToken, checkPermission("services", "create"), createOrUpdateServiceOverview);
router.get("/", getServiceOverview);

module.exports = router;
