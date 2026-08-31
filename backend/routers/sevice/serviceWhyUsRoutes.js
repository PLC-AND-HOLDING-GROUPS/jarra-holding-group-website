const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middlewares/authMiddleware");

const {
    createOrUpdateServiceWhyUs,
    getServiceWhyUs
} = require("../../controllers/service/serviceWhyUsController");

router.post("/", authenticateToken, createOrUpdateServiceWhyUs);
router.get("/", getServiceWhyUs);

module.exports = router;
