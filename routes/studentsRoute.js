const express = require("express")
const { createStudent, getAllStudents, getStudentById } = require("../controller/studentController.js")

const router = express.Router();
router.route('/').post(createStudent);
router.route('/').get(getAllStudents);
router.route('/:id').get(getStudentById);

module.exports = router