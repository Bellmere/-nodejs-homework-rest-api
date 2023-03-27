const contacts = require('../../models/contacts');
const createError = require('http-errors')

const removeContact = async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const result = await contacts.removeContact(contactId);
      if (!result) {
        throw createError(404, 'Not Found');
      }
      res.status(200).json({message: "contact deleted"})
    } catch (err) {
      next(err);
    }
  };

  module.exports = removeContact;