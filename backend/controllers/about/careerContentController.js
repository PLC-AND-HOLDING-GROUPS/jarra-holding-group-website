"use strict";

const { CareerContent, Attachment } = require("../../models");

const createOrUpdateCareerContent = async (req, res) => {
    try {
        const {
            intro_title,
            intro_title_highlight,
            intro_description_1,
            intro_description_2,
            intro_image_id,
            intro_card_focus,
            intro_card_growth,
            culture_top_title,
            culture_title,
            culture_title_highlight,
            culture_description,
            culture_image_main_id,
            culture_image_sub_id,
            culture_features
        } = req.body;

        let content = await CareerContent.findOne();
        
        if (content) {
            content = await content.update({
                intro_title,
                intro_title_highlight,
                intro_description_1,
                intro_description_2,
                intro_image_id,
                intro_card_focus,
                intro_card_growth,
                culture_top_title,
                culture_title,
                culture_title_highlight,
                culture_description,
                culture_image_main_id,
                culture_image_sub_id,
                culture_features
            });
        } else {
            content = await CareerContent.create({
                intro_title,
                intro_title_highlight,
                intro_description_1,
                intro_description_2,
                intro_image_id,
                intro_card_focus,
                intro_card_growth,
                culture_top_title,
                culture_title,
                culture_title_highlight,
                culture_description,
                culture_image_main_id,
                culture_image_sub_id,
                culture_features
            });
        }

        // Fetch with attachments
        const updatedContent = await CareerContent.findOne({
            include: [
                { model: Attachment, as: 'intro_image' },
                { model: Attachment, as: 'culture_image_main' },
                { model: Attachment, as: 'culture_image_sub' }
            ]
        });

        return res.status(200).json({ success: true, data: updatedContent, message: "Career content saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getCareerContent = async (req, res) => {
    try {
        const content = await CareerContent.findOne({
            include: [
                { model: Attachment, as: 'intro_image' },
                { model: Attachment, as: 'culture_image_main' },
                { model: Attachment, as: 'culture_image_sub' }
            ]
        });
        return res.status(200).json({ success: true, data: content || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdateCareerContent,
    getCareerContent
};
