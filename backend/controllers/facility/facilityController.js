const { Facility } = require("../../models");

exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await Facility.findAll({
            order: [["order", "ASC"], ["created_at", "DESC"]],
        });
        res.status(200).json({ success: true, data: facilities });
    } catch (error) {
        console.error("Error fetching facilities:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getFacilityById = async (req, res) => {
    try {
        const facility = await Facility.findByPk(req.params.id);
        if (!facility) {
            return res.status(404).json({ success: false, message: "Facility not found" });
        }
        res.status(200).json({ success: true, data: facility });
    } catch (error) {
        console.error("Error fetching facility:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.createFacility = async (req, res) => {
    try {
        const maxOrderFacility = await Facility.findOne({
            order: [["order", "DESC"]],
        });
        const nextOrder = maxOrderFacility ? maxOrderFacility.order + 1 : 0;
        
        const facility = await Facility.create({
            ...req.body,
            order: nextOrder,
        });
        res.status(201).json({ success: true, data: facility });
    } catch (error) {
        console.error("Error creating facility:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.updateFacility = async (req, res) => {
    try {
        const facility = await Facility.findByPk(req.params.id);
        if (!facility) {
            return res.status(404).json({ success: false, message: "Facility not found" });
        }
        await facility.update(req.body);
        res.status(200).json({ success: true, data: facility });
    } catch (error) {
        console.error("Error updating facility:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteFacility = async (req, res) => {
    try {
        const facility = await Facility.findByPk(req.params.id);
        if (!facility) {
            return res.status(404).json({ success: false, message: "Facility not found" });
        }
        await facility.destroy();
        res.status(200).json({ success: true, message: "Facility deleted successfully" });
    } catch (error) {
        console.error("Error deleting facility:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.reorderFacilities = async (req, res) => {
    try {
        const { facilities } = req.body;
        if (!Array.isArray(facilities)) {
            return res.status(400).json({ success: false, message: "Invalid payload format" });
        }
        
        await Promise.all(
            facilities.map((item) =>
                Facility.update({ order: item.order }, { where: { facility_id: item.id } })
            )
        );
        
        res.status(200).json({ success: true, message: "Facilities reordered successfully" });
    } catch (error) {
        console.error("Error reordering facilities:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
