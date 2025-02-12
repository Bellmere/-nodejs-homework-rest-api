const { Contact } = require("../../models");
const createError = require("http-errors");

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw createError(404, "Not Found");
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;
