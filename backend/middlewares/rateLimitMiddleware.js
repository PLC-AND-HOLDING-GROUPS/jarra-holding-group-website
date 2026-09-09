"use strict";

const rateLimit = require("express-rate-limit");

// General settings for error responses
const handler = (req, res, next, options) => {
    res.status(options.statusCode).json({
        success: false,
        message: options.message
    });
};

// 1. Contact Submissions (10 req / 15 min / IP)
exports.contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many contact messages from this IP, please try again after 15 minutes.",
    handler
});

// 2. Product Inquiries (10 req / 15 min / IP)
exports.productInquiryLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many product inquiries from this IP, please try again after 15 minutes.",
    handler
});

// 3. Job Applications (5 req / 1 hour / IP)
exports.jobApplicationLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many job applications from this IP, please try again after an hour.",
    handler
});

// 4. File Uploads (10 req / 1 hour / IP)
exports.fileUploadLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many file uploads from this IP, please try again after an hour.",
    handler
});

// 5. News Interactions (30 req / 15 min / IP)
exports.newsInteractionLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many interactions from this IP, please try again after 15 minutes.",
    handler
});
