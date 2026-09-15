"use strict";

const express = require("express");
const router = express.Router();

const { authenticateToken, checkPermission } = require("../../middlewares/authMiddleware");


const {
    createPartner,
    getAllPartners,
    getPartnerById,
    updatePartner,
    deletePartner,
} = require("../../controllers/hero/partnerController");

const {
    validateCreatePartner,
    validateUpdatePartner,
    validatePartnerId,
} = require("../../validators/hero/partnerValidator");

// ================= PUBLIC =================
router.get("/", getAllPartners);
router.get("/:id", validatePartnerId, getPartnerById);

// ================= ADMIN =================
router.post("/", authenticateToken, checkPermission("hero", "create"), validateCreatePartner, createPartner);

router.put("/:id", authenticateToken,
    checkPermission("hero", "update"), validatePartnerId,
    validateUpdatePartner,
    updatePartner
);

router.delete("/:id", authenticateToken,
    checkPermission("hero", "delete"), validatePartnerId,
    deletePartner
);

module.exports = router;