const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");
const facilityController = require("../../controllers/facility/facilityController");

router.get("/", facilityController.getAllFacilities);
router.get("/:id", facilityController.getFacilityById);
router.post("/", authenticateToken, checkPermission("facilities", "create"), facilityController.createFacility);
router.put("/reorder", authenticateToken, checkPermission("facilities", "update"), facilityController.reorderFacilities);
router.put("/:id", authenticateToken, checkPermission("facilities", "update"), facilityController.updateFacility);
router.delete("/:id", authenticateToken, checkPermission("facilities", "delete"), facilityController.deleteFacility);

module.exports = router;
