const express = require("express");

const { validateBody } = require("../../middlewares");
const { users: ctrl } = require("../../controllers/");
const { register } = ctrl;

const router = express.Router();

router.post("/register", register);

module.exports = router;
