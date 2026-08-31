"use strict";

const { ServiceExperience } = require("../../models");

const createOrUpdateServiceExperience = async (req, res) => {
    try {
        const { heading, subheading, steps } = req.body;

        let experience = await ServiceExperience.findOne();
        
        if (experience) {
            experience = await experience.update({
                heading,
                subheading,
                steps
            });
        } else {
            experience = await ServiceExperience.create({
                heading,
                subheading,
                steps
            });
        }

        return res.status(200).json({ success: true, data: experience, message: "Service Experience saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getServiceExperience = async (req, res) => {
    try {
        const experience = await ServiceExperience.findOne();
        return res.status(200).json({ success: true, data: experience || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdateServiceExperience,
    getServiceExperience
};
