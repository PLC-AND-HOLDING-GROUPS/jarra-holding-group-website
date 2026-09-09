"use strict";

const Joi = require("joi");
const { validate: isUuid } = require("uuid");

const createProductInquirySchema = Joi.object({
  product_id: Joi.string()
    .custom((value, helpers) => {
      if (!isUuid(value)) return helpers.error("any.invalid");
      return value;
    })
    .required()
    .messages({
      "any.invalid": "Must be a valid UUID for product_id.",
      "any.required": "product_id is required."
    }),

  name: Joi.string().max(255).required().messages({
    "string.empty": "Name is required.",
    "string.max": "Name cannot exceed 255 characters.",
  }),

  company: Joi.string().max(255).allow(null, "").messages({
    "string.max": "Company cannot exceed 255 characters.",
  }),
  
  quantity: Joi.number().integer().min(1).allow(null, "").messages({
    "number.base": "Quantity must be a number.",
    "number.min": "Quantity must be at least 1."
  }),

  email: Joi.string().email().max(255).required().messages({
    "string.empty": "Email is required.",
    "string.email": "Must be a valid email address.",
    "string.max": "Email cannot exceed 255 characters.",
  }),

  phone: Joi.string().max(50).required().messages({
    "string.empty": "Phone number is required.",
    "string.max": "Phone number cannot exceed 50 characters.",
  }),

  subject: Joi.string().max(255).required().messages({
    "string.empty": "Subject is required.",
    "string.max": "Subject cannot exceed 255 characters.",
  }),

  message: Joi.string().max(10000).required().messages({
    "string.empty": "Message is required.",
    "string.max": "Message cannot exceed 10000 characters."
  })
});

exports.validateProductInquiry = (req, res, next) => {
  const { error } = createProductInquirySchema.validate(req.body, {
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
