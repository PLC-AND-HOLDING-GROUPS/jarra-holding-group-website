const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");
const pageHeaderController = require("../../controllers/system/pageHeaderController");

router.get("/", pageHeaderController.getAllPageHeaders);
router.get("/:identifier", pageHeaderController.getPageHeaderByIdentifier);
router.put("/:identifier", authenticateToken, checkPermission("page_headers", "update"), pageHeaderController.updatePageHeader);

module.exports = router;
