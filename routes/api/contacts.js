const express = require('express');

const { validateBody } = require('../../middlewares');
const { joiSchema, favoriteJoiSchema } = require('../../models/contact');
const { contacts: ctrl } = require('../../controllers/');
const {listContacts, getContactById, addContact, removeContact, updateContact, updateFavorite} = ctrl;

const router = express.Router()

router.get('/', listContacts);

router.get('/:contactId', getContactById);

router.post('/', validateBody(joiSchema), addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', validateBody(joiSchema), updateContact);

router.patch('/:contactId/favorite', validateBody(favoriteJoiSchema), updateFavorite);

module.exports = router;
