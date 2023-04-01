const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  try {
    const result = await Contact.find({});
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getContacts;
