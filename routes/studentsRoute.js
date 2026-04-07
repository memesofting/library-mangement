const express = require("express")
const { createStudent } = require("../controller/studentController.js")

const router = express.Router();
router.route('/').post(createStudent);

module.exports = router