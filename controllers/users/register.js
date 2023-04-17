const { Conflict } = require("http-errors");
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../models");
const { sendEmail } = require("../../sendgrid/helpers");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`${email} in use`);
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Verify your account",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json(result);
};

module.exports = register;
