const express = require('express');

const { validateBody } = require('../../middlewares');
const { contactSchema } = require('../../shemas');
const { contacts: ctrl } = require('../../controllers/');
const {listContacts, getContactById, addContact, removeContact, updateContact} = ctrl;

const router = express.Router()

router.get('/', listContacts);

router.get('/:contactId', getContactById);

router.post('/', validateBody(contactSchema), addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', validateBody(contactSchema), updateContact);

module.exports = router;
