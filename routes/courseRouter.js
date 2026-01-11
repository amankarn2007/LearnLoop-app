const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router
    .route("/show")
    .get(courseController.showAllCourses)

module.exports = router;