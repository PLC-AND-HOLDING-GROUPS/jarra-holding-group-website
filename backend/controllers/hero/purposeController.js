"use strict";

const { Purpose, Attachment } = require("../../models");

const createOrUpdatePurpose = async (req, res) => {
    try {
        const { subtitle, title, description, quote, pillars, attachment_id } = req.body;

        let purpose = await Purpose.findOne();
        
        if (purpose) {
            purpose = await purpose.update({
                subtitle,
                title,
                description,
                quote,
                pillars,
                attachment_id
            });
        } else {
            purpose = await Purpose.create({
                subtitle,
                title,
                description,
                quote,
                pillars,
                attachment_id
            });
        }

        const populatedPurpose = await Purpose.findByPk(purpose.purpose_id, {
            include: [{ model: Attachment, as: "attachment" }]
        });

        return res.status(200).json({ success: true, data: populatedPurpose, message: "Purpose saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getPurpose = async (req, res) => {
    try {
        const purpose = await Purpose.findOne({
            include: [{ model: Attachment, as: "attachment" }]
        });
        return res.status(200).json({ success: true, data: purpose || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdatePurpose,
    getPurpose
};
