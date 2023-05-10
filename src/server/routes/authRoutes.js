const express = require('express');

const authController  = require("../controllers/authControllers")

const authRouter = express.Router();

authRouter.route("/login").post(authController.login);
authRouter.route("/register").post(authController.register);

module.exports = authRouter;