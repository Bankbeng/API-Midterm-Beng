
const courseModel = require("../models/courseModel");


const handleGetCourses = (req, res) => {
    const coursesData = courseModel.getAllCourses();
    res.json(coursesData);
};

const courseController = {
    handleGetCourses,
};

module.exports = courseController;