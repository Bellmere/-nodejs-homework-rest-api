const express = require("express");

const { validateBody } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { register, login } = ctrl;
const { joiLoginSchema, joiRegisterSchema } = require("../../utils/validation/user/ValidationSchemas");

const router = express.Router();

router.post("/register", validateBody(joiRegisterSchema), register);

router.post("/login", validateBody(joiLoginSchema), login);

module.exports = router;
