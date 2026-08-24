const express = require("express");
const router = express.Router();
const pageHeaderController = require("../../controllers/system/pageHeaderController");

router.get("/", pageHeaderController.getAllPageHeaders);
router.get("/:identifier", pageHeaderController.getPageHeaderByIdentifier);
router.put("/:identifier", pageHeaderController.updatePageHeader);

module.exports = router;
