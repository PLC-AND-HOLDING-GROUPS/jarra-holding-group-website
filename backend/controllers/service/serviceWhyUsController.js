"use strict";

const { ServiceWhyUs } = require("../../models");

const createOrUpdateServiceWhyUs = async (req, res) => {
    try {
        const { heading, subheading, points, cta_heading, cta_subheading, cta_buttons } = req.body;

        let whyUs = await ServiceWhyUs.findOne();
        
        if (whyUs) {
            whyUs = await whyUs.update({
                heading,
                subheading,
                points,
                cta_heading,
                cta_subheading,
                cta_buttons
            });
        } else {
            whyUs = await ServiceWhyUs.create({
                heading,
                subheading,
                points,
                cta_heading,
                cta_subheading,
                cta_buttons
            });
        }

        return res.status(200).json({ success: true, data: whyUs, message: "Service Why Us saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getServiceWhyUs = async (req, res) => {
    try {
        const whyUs = await ServiceWhyUs.findOne();
        return res.status(200).json({ success: true, data: whyUs || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdateServiceWhyUs,
    getServiceWhyUs
};
