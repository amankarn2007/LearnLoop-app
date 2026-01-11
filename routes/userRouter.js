const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isUser = require("../middlewares/isUser");

router
    .route("/signup")
    .get(userController.renderSigningFrom)
    .post(userController.createUser);

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(userController.loginUser)


router
    .route("/course")
    .get(isUser, userController.showUserCourses)


module.exports = router;