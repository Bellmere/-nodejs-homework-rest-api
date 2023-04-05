const express = require("express");

const { validateBody, ctrlWrapper, auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { register, login, logout } = ctrl;
const {
  joiLoginSchema,
  joiRegisterSchema,
} = require("../../utils/validation/user/ValidationSchemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(joiRegisterSchema),
  ctrlWrapper(register)
);

router.post("/login", validateBody(joiLoginSchema), ctrlWrapper(login));

router.post("/logout", auth, ctrlWrapper(logout));

module.exports = router;
