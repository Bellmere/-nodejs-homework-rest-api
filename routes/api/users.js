const express = require("express");

const { auth, ctrlWrapper, upload } = require("../../middlewares");
const { currentUser: ctrl } = require("../../controllers");
const { getCurrent, updateAvatar, verifyEmail, resendVerificationEmail } = ctrl;

const router = express.Router();

router.get("/current", auth, ctrlWrapper(getCurrent));

router.get("/verify/:verificationtoken", ctrlWrapper(verifyEmail));

router.post("/verify", ctrlWrapper(resendVerificationEmail));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;
