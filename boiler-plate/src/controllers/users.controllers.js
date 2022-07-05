const User = require("../models/User");

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

const login = (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        success: false,
        message: "이메일 혹은 비밀번호가 틀렸습니다.",
      });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          success: false,
          message: "이메일 혹은 비밀번호가 틀렸습니다.",
        });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("user_auth", user.token)
          .status(200)
          .json({ success: true, userId: user._id, token: user.token });
      });
    });
  });
};

module.exports = {
  signup,
  login,
};
