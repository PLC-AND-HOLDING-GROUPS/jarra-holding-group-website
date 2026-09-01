const { FacilityFootprint } = require("../../models");

exports.getFootprint = async (req, res) => {
    try {
        let footprint = await FacilityFootprint.findOne();
        if (!footprint) {
            footprint = await FacilityFootprint.create({});
        }
        res.status(200).json({ success: true, data: footprint });
    } catch (error) {
        console.error("Error fetching facility footprint:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.updateFootprint = async (req, res) => {
    try {
        let footprint = await FacilityFootprint.findOne();
        if (footprint) {
            await footprint.update(req.body);
        } else {
            footprint = await FacilityFootprint.create(req.body);
        }
        res.status(200).json({ success: true, data: footprint });
    } catch (error) {
        console.error("Error updating facility footprint:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
