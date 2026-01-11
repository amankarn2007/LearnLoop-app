const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router
    .route("/signin")
    .get(adminController.renderSigningFrom)

module.exports = router;