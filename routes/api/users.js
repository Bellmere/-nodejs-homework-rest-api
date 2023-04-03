const express = require("express");

const { validateBody } = require("../../middlewares");
const { users: ctrl } = require("../../controllers/");
const { register } = ctrl;
const { joiLoginSchema, joiRegisterSchema } = require("../../utils/validation/user/ValidationScgemas");

const router = express.Router();

router.post("/register", validateBody(joiRegisterSchema), register);

module.exports = router;
