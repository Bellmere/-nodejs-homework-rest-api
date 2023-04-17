const { nanoid } = require("nanoid");

const { User } = require("../../models");
const { sendEmail } = require("../../sendgrid/helpers");

const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  // Validate request body
  if (!email) {
    return res.status(400).json({ message: "missing required field email" });
  }

  // Check if user is already verified
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User with this email not found" });
  }
  if (user.verify) {
    return res
      .status(400)
      .json({ message: "Verification has already been passed" });
  }

  // Generate new verification token
  const verificationToken = nanoid();
  user.verificationToken = verificationToken;
  await user.save();

  // Send verification email
  const emailData = {
    to: email,
    subject: "Verify your account",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };
  try {
    await sendEmail(emailData);
    return res.json({ message: "Verification email sent" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to send verification email" });
  }
};

module.exports = resendVerificationEmail;
