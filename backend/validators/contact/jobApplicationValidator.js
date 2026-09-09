"use strict";

const Joi = require("joi");
const { validate: isUuid } = require("uuid");

const createApplicationSchema = Joi.object({
  vacancy_id: Joi.string()
    .custom((value, helpers) => {
      if (!isUuid(value)) return helpers.error("any.invalid");
      return value;
    })
    .required()
    .messages({
      "any.invalid": "Must be a valid UUID for vacancy_id.",
      "any.required": "vacancy_id is required."
    }),

  first_name: Joi.string().max(255).required().messages({
    "string.empty": "First name is required.",
    "string.max": "First name cannot exceed 255 characters.",
  }),

  last_name: Joi.string().max(255).required().messages({
    "string.empty": "Last name is required.",
    "string.max": "Last name cannot exceed 255 characters.",
  }),

  email: Joi.string().email().max(255).required().messages({
    "string.empty": "Email address is required.",
    "string.email": "Must be a valid email address.",
    "string.max": "Email address cannot exceed 255 characters.",
  }),

  phone: Joi.string().max(50).required().messages({
    "string.empty": "Phone number is required.",
    "string.max": "Phone number cannot exceed 50 characters.",
  }),

  cover_letter: Joi.string().max(10000).allow(null, "").messages({
    "string.max": "Cover letter cannot exceed 10000 characters."
  }),

  cv_attachment_id: Joi.string()
    .custom((value, helpers) => {
      if (!isUuid(value)) return helpers.error("any.invalid");
      return value;
    })
    .required()
    .messages({
      "any.invalid": "Must be a valid UUID for cv_attachment_id.",
      "any.required": "cv_attachment_id is required."
    })
});

exports.validateCreateApplication = (req, res, next) => {
  const { error } = createApplicationSchema.validate(req.body, {
    abortEarly: true,
    allowUnknown: false,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};
