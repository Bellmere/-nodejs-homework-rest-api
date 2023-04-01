const express = require('express');

const { validateBody } = require('../../middlewares');
const { joiSchema, favoriteJoiSchema } = require('../../utils/validation/contact/ValidationSchemas');
const { contacts: ctrl } = require('../../controllers/');
const {getContacts, getContactById, addContact, removeContact, updateContact, updateFavorite} = ctrl;

const router = express.Router()

router.get('/', getContacts);

router.get('/:contactId', getContactById);

router.post('/', validateBody(joiSchema), addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', validateBody(joiSchema), updateContact);

router.patch('/:contactId/favorite', validateBody(favoriteJoiSchema), updateFavorite);

module.exports = router;
