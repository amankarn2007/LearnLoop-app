const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router
    .route("/signup")
    .get(adminController.renderSigningFrom)
    .post(adminController.createAdmin)


router
    .route("/login")
    .get(adminController.renderAdminLoginForm)
    .post(adminController.loginUser);

module.exports = router;