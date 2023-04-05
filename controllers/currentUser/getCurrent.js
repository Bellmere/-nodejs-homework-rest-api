const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { name, email } = req.user;
  res.status(200).json({
    status: "success",
    data: {
      user: {
        name,
        email,
      },
    },
  });
};

module.exports = getCurrent;
