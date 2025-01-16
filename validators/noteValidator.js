const Joi = require('joi');

const createNoteSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(5).max(1000).required(),
});

const updateNoteSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(5).max(1000).required(),
});

module.exports = { createNoteSchema, updateNoteSchema };
