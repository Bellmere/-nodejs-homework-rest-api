const { Conflict } = require("http-errors");
const { User } = require("../../models");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = User.findOne({ email });
    if (user) {
      throw new Conflict(`${email} in use`);
    }
    const result = await User.create({ name, email, password });
    res.statu(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = register;
