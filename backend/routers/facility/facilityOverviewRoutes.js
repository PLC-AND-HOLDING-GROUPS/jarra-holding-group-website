const express = require("express");
const router = express.Router();
const facilityOverviewController = require("../../controllers/facility/facilityOverviewController");

router.get("/", facilityOverviewController.getOverview);
router.post("/", facilityOverviewController.updateOverview);

module.exports = router;
