const contacts = require('../../models/contacts');
const createError = require('http-errors')

const updateContact = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const { name, email, phone } = req.body;
      if (!name && !email && !phone) {
        throw createError(400, 'Missing fields');
      }
      const result = await contacts.updateContact(contactId, req.body);
      if (!result) {
        throw createError(404, 'Not Found');
      }
      res.status(200).json(result)
    } catch (err) {
      next(err);
    }
  };

  module.exports = updateContact;