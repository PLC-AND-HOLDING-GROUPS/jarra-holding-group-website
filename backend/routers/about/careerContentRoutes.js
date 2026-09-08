"use strict";
const express = require("express");
const router = express.Router();
const careerContentController = require("../../controllers/about/careerContentController");
const { authenticateToken } = require("../../middlewares/authMiddleware");

router.get("/", careerContentController.getCareerContent);
router.post("/", authenticateToken, careerContentController.createOrUpdateCareerContent);

module.exports = router;
