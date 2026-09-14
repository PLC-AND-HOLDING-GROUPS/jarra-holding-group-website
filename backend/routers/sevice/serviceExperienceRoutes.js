const express = require("express");
const router = express.Router();
const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createOrUpdateServiceExperience,
    getServiceExperience
} = require("../../controllers/service/serviceExperienceController");

router.post("/", authenticateToken, checkPermission("services", "create"), createOrUpdateServiceExperience);
router.get("/", getServiceExperience);

module.exports = router;
