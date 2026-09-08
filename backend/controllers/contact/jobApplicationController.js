"use strict";

const { JobApplication, Vacancy, Attachment } = require("../../models");

/**
 * Public: Submit a new job application
 */
const submitApplication = async (req, res) => {
    try {
        const { vacancy_id, first_name, last_name, email, phone, cover_letter, cv_attachment_id } = req.body;

        // Verify vacancy exists and is available
        const vacancy = await Vacancy.findByPk(vacancy_id);
        
        if (!vacancy) {
            return res.status(404).json({ success: false, message: "Vacancy not found." });
        }
        
        if (vacancy.status !== "published" && vacancy.status !== "closed") {
             // If draft, can't apply
             return res.status(400).json({ success: false, message: "This vacancy is not open for applications." });
        }

        const today = new Date().toISOString().split('T')[0];
        if (vacancy.application_deadline < today || vacancy.status === "closed") {
            return res.status(400).json({ success: false, message: "The application deadline for this vacancy has passed." });
        }

        // Verify attachment
        if (!cv_attachment_id) {
             return res.status(400).json({ success: false, message: "CV attachment is required." });
        }

        const application = await JobApplication.create({
            vacancy_id,
            first_name,
            last_name,
            email,
            phone,
            cover_letter,
            cv_attachment_id,
            status: "new"
        });

        return res.status(201).json({
            success: true,
            message: "Your application has been submitted successfully.",
            data: application
        });
    } catch (error) {
        console.error("Error submitting job application:", error);
        return res.status(500).json({ success: false, message: "Failed to submit application. Please try again." });
    }
};

/**
 * Admin: Get all applications for a specific vacancy
 */
const getApplicationsByVacancy = async (req, res) => {
    try {
        const { vacancyId } = req.params;

        const applications = await JobApplication.findAll({
            where: { vacancy_id: vacancyId },
            include: [
                {
                    model: Attachment,
                    as: "cv_attachment",
                    attributes: ["attachment_id", "file_name", "file_path", "mime_type"]
                }
            ],
            order: [["created_at", "DESC"]]
        });

        return res.status(200).json({ success: true, data: applications });
    } catch (error) {
        console.error("Error fetching applications:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch applications." });
    }
};

/**
 * Admin: Get single application by ID
 */
const getApplicationById = async (req, res) => {
    try {
        const { id } = req.params;

        const application = await JobApplication.findByPk(id, {
            include: [
                {
                    model: Vacancy,
                    as: "vacancy",
                    attributes: ["job_title", "department", "location"]
                },
                {
                    model: Attachment,
                    as: "cv_attachment",
                    attributes: ["attachment_id", "file_name", "file_path", "mime_type"]
                }
            ]
        });

        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found." });
        }

        return res.status(200).json({ success: true, data: application });
    } catch (error) {
        console.error("Error fetching application details:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch application details." });
    }
};

/**
 * Admin: Update application status
 */
const updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatuses = ["new", "reviewed", "shortlisted", "rejected", "hired"];
        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status value." });
        }

        const application = await JobApplication.findByPk(id);

        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found." });
        }

        application.status = status;
        await application.save();

        return res.status(200).json({ 
            success: true, 
            message: "Application status updated successfully.",
            data: application
        });
    } catch (error) {
        console.error("Error updating application status:", error);
        return res.status(500).json({ success: false, message: "Failed to update application status." });
    }
};

/**
 * Admin: Update application feedback
 */
const updateApplicationFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { feedback } = req.body;

        const application = await JobApplication.findByPk(id);

        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found." });
        }

        application.feedback = feedback;
        await application.save();

        return res.status(200).json({ 
            success: true, 
            message: "Application feedback updated successfully.",
            data: application
        });
    } catch (error) {
        console.error("Error updating application feedback:", error);
        return res.status(500).json({ success: false, message: "Failed to update application feedback." });
    }
};

module.exports = {
    submitApplication,
    getApplicationsByVacancy,
    getApplicationById,
    updateApplicationStatus,
    updateApplicationFeedback
};
