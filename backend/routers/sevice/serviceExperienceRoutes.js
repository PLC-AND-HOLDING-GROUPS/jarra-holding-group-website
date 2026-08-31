const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middlewares/authMiddleware");

const {
    createOrUpdateServiceExperience,
    getServiceExperience
} = require("../../controllers/service/serviceExperienceController");

router.post("/", authenticateToken, createOrUpdateServiceExperience);
router.get("/", getServiceExperience);

module.exports = router;
