const { Contact } = require("../../models");
const createError = require('http-errors')

const updateContact = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true}); 
      if (!result) {
        throw createError(404, 'Not Found');
      }
      res.status(200).json(result)
    } catch (err) {
      next(err);
    }
  };

  module.exports = updateContact;