const db = require("../../models");
const PageHeader = db.PageHeader;
const Attachment = db.Attachment;

exports.getPageHeaderByIdentifier = async (req, res) => {
    try {
        const { identifier } = req.params;
        const pageHeader = await PageHeader.findOne({
            where: { page_identifier: identifier },
            include: [
                {
                    model: Attachment,
                    as: "backgroundAttachment",
                },
            ],
        });

        if (!pageHeader) {
            return res.status(200).json(null);
        }

        res.status(200).json(pageHeader);
    } catch (error) {
        console.error("Error fetching page header:", error);
        res.status(500).json({ message: "Failed to fetch page header.", error: error.message });
    }
};

exports.getAllPageHeaders = async (req, res) => {
    try {
        const pageHeaders = await PageHeader.findAll({
            include: [
                {
                    model: Attachment,
                    as: "backgroundAttachment",
                },
            ],
        });

        res.status(200).json(pageHeaders);
    } catch (error) {
        console.error("Error fetching page headers:", error);
        res.status(500).json({ message: "Failed to fetch page headers.", error: error.message });
    }
};

exports.updatePageHeader = async (req, res) => {
    try {
        const { identifier } = req.params;
        const { title, description, icon, attachment_id } = req.body;

        let pageHeader = await PageHeader.findOne({ where: { page_identifier: identifier } });

        if (pageHeader) {
            // Update existing
            await pageHeader.update({ title, description, icon, attachment_id });
        } else {
            // Create new
            pageHeader = await PageHeader.create({
                page_identifier: identifier,
                title,
                description,
                icon,
                attachment_id,
            });
        }

        // Fetch again to include attachment
        const updatedPageHeader = await PageHeader.findOne({
            where: { page_identifier: identifier },
            include: [
                {
                    model: Attachment,
                    as: "backgroundAttachment",
                },
            ],
        });

        res.status(200).json({
            message: "Page header updated successfully.",
            pageHeader: updatedPageHeader,
        });
    } catch (error) {
        console.error("Error updating page header:", error);
        res.status(500).json({ message: "Failed to update page header.", error: error.message });
    }
};
