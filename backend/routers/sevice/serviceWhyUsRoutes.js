const express = require("express");
const router = express.Router();
const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createOrUpdateServiceWhyUs,
    getServiceWhyUs
} = require("../../controllers/service/serviceWhyUsController");

router.post("/", authenticateToken, checkPermission("services", "create"), createOrUpdateServiceWhyUs);
router.get("/", getServiceWhyUs);

module.exports = router;
