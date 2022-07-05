const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({
      success: true,
      userInfo,
    });
  });
};

module.exports = {
  signup,
};
