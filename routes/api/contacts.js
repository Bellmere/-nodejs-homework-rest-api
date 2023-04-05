const express = require("express");

const { validateBody, ctrlWrapper, auth } = require("../../middlewares");
const {
  joiSchema,
  favoriteJoiSchema,
} = require("../../utils/validation/contact/ValidationSchemas");
const { contacts: ctrl } = require("../../controllers/");
const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = ctrl;

const router = express.Router();

router.get("/", auth, ctrlWrapper(getContacts));

router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/", auth, validateBody(joiSchema), ctrlWrapper(addContact));

router.delete("/:contactId", ctrlWrapper(removeContact));

router.put("/:contactId", validateBody(joiSchema), ctrlWrapper(updateContact));

router.patch(
  "/:contactId/favorite",
  validateBody(favoriteJoiSchema),
  ctrlWrapper(updateFavorite)
);

module.exports = router;
