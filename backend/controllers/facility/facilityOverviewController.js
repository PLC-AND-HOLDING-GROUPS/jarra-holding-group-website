const { FacilityOverview } = require("../../models");

exports.getOverview = async (req, res) => {
    try {
        let overview = await FacilityOverview.findOne();
        if (!overview) {
            overview = await FacilityOverview.create({});
        }
        res.status(200).json({ success: true, data: overview });
    } catch (error) {
        console.error("Error fetching facility overview:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.updateOverview = async (req, res) => {
    try {
        let overview = await FacilityOverview.findOne();
        if (overview) {
            await overview.update(req.body);
        } else {
            overview = await FacilityOverview.create(req.body);
        }
        res.status(200).json({ success: true, data: overview });
    } catch (error) {
        console.error("Error updating facility overview:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
