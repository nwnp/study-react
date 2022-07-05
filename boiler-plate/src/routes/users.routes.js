const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controllers");
const auth = require("../middlewares/auth");

router.post("/users/auth/signup", userController.signup);
router.post("/users/auth/login", userController.login);
router.get("/users/auth", auth, userController.verify);

module.exports = router;
