const courseModel = require("../models/courseModel");

module.exports.showAllCourses = (req, res) => {
    res.send("course controller");
}

module.exports.createCourse = async (req, res) => {
    const {title, description, price} = req.body;

    const newCourse = await courseModel.create({
        title, description, price
    })

    res.send(newCourse);
}