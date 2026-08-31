"use strict";

const { ServiceOverview } = require("../../models");

const createOrUpdateServiceOverview = async (req, res) => {
    try {
        const { heading, subheading, description, cards } = req.body;

        let overview = await ServiceOverview.findOne();
        
        if (overview) {
            overview = await overview.update({
                heading,
                subheading,
                description,
                cards
            });
        } else {
            overview = await ServiceOverview.create({
                heading,
                subheading,
                description,
                cards
            });
        }

        return res.status(200).json({ success: true, data: overview, message: "Service Overview saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getServiceOverview = async (req, res) => {
    try {
        const overview = await ServiceOverview.findOne();
        return res.status(200).json({ success: true, data: overview || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdateServiceOverview,
    getServiceOverview
};
