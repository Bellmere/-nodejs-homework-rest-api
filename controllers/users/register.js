const { Conflict } = require("http-errors");
const bcrypt = require('bcryptjs');

const { User } = require("../../models");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = User.findOne({ email });
    if (user) {
      throw new Conflict(`${email} in use`);
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const result = await User.create({ name, email, password: hashPassword });
    res.statu(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = register;
