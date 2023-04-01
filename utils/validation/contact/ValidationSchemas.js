const Joi = require('joi');

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.bool()
  })
  
  const favoriteJoiSchema = Joi.object({
    favorite: Joi.bool().required()
  })

  module.exports = {
    joiSchema,
    favoriteJoiSchema
  }