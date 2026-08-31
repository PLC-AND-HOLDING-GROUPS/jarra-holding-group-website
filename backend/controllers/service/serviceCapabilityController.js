"use strict";

const { ServiceCapability } = require("../../models");

const createOrUpdateServiceCapability = async (req, res) => {
    try {
        const { heading, subheading, capabilities } = req.body;

        let capability = await ServiceCapability.findOne();
        
        if (capability) {
            capability = await capability.update({
                heading,
                subheading,
                capabilities
            });
        } else {
            capability = await ServiceCapability.create({
                heading,
                subheading,
                capabilities
            });
        }

        return res.status(200).json({ success: true, data: capability, message: "Service Capability saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getServiceCapability = async (req, res) => {
    try {
        const capability = await ServiceCapability.findOne();
        return res.status(200).json({ success: true, data: capability || {} });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrUpdateServiceCapability,
    getServiceCapability
};
