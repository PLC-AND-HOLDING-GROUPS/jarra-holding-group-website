const express = require("express");
const router = express.Router();
const facilityController = require("../../controllers/facility/facilityController");

router.get("/", facilityController.getAllFacilities);
router.get("/:id", facilityController.getFacilityById);
router.post("/", facilityController.createFacility);
router.put("/reorder", facilityController.reorderFacilities);
router.put("/:id", facilityController.updateFacility);
router.delete("/:id", facilityController.deleteFacility);

module.exports = router;
