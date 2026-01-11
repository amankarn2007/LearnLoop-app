const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
    .route("/signup")
    .get(userController.renderSigningFrom)
    .post(userController.createUser);

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(userController.loginUser)

module.exports = router;