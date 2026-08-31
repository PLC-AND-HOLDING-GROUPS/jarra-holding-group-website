const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middlewares/authMiddleware");

const {
    createOrUpdateServiceOverview,
    getServiceOverview
} = require("../../controllers/service/serviceOverviewController");

router.post("/", authenticateToken, createOrUpdateServiceOverview);
router.get("/", getServiceOverview);

module.exports = router;
