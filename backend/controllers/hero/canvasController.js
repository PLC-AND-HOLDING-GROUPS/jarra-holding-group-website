"use strict";

const { Canvas } = require("../../models");

const createOrUpdateCanvas = async (req, res) => {
    try {
        const { title_prefix, title_highlight, description, vision_title, vision_description, words } = req.body;

        let canvas = await Canvas.findOne();
        
        if (canvas) {
            canvas = await canvas.update({
                title_prefix,
                title_highlight,
                description,
                vision_title,
                vision_description,
                words
            });
        } else {
            canvas = await Canvas.create({
                title_prefix,
                title_highlight,
                description,
                vision_title,
                vision_description,
                words
            });
        }

        return res.status(200).json({ success: true, data: canvas, message: "Canvas saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getCanvas = async (req, res) => {
    try {
        const canvas = await Canvas.findOne();
        return res.status(200).json({ success: true, data: canvas || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdateCanvas,
    getCanvas
};
