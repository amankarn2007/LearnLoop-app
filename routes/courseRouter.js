const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const isAdmin = require("../middlewares/isAdmin");

router
    .route("/")
    .get(courseController.showAllCourses)
    

router
    .route("/create")
    .post(isAdmin, courseController.createCourse) 


module.exports = router;