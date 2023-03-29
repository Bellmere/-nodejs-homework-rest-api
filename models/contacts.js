const fs = require("fs/promises");
const path = require('path');
const {v4} = require('uuid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const response = await fs.readFile(contactsPath);
  const contacts = JSON.parse(response);
  return contacts;
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find(item => item.id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return contacts[idx];
}

const addContact = async (body) => {
  const contacts = await listContacts();
  const {name, email, phone} = body;
  if(!name || !email || !phone) {
      return null;
  }
  const id = v4();
  const newContact = {id, ...body};
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = {...contacts[idx], ...body, id: contactId};
  console.log(contacts[idx]);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
