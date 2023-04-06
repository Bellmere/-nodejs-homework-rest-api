const express = require("express");

const { auth } = require("../../middlewares");
const { currentUser: ctrl } = require("../../controllers");
const { getCurrent } = ctrl;

const router = express.Router();

router.get("/current", auth, getCurrent);

module.exports = router;
