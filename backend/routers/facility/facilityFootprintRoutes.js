const express = require("express");
const router = express.Router();
const facilityFootprintController = require("../../controllers/facility/facilityFootprintController");

router.get("/", facilityFootprintController.getFootprint);
router.post("/", facilityFootprintController.updateFootprint);

module.exports = router;
