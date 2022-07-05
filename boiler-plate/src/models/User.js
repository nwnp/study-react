const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    maxlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExpiration: {
    type: Number,
  },
});

// user save 전에 Dao 역할
userSchema.pre("save", function (next) {
  var user = this;

  // save 요청일 때 password의 변화가 감지될 때만
  // 즉, 수정이나 회원가입 할 때만 감지
  if (user.isModified("password")) {
    const SALT = parseInt(process.env.BCRYPT_SALT_AND_ROUNDS);
    bcrypt.genSalt(SALT, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hashedPassword) => {
        if (err) return next(err);
        user.password = hashedPassword;
        next();
      });
    });
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
