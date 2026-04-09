const express = require("express")
const { borrowBook } = require("../controller/bookController.js")

const router = express.Router();
router.route('/').post(borrowBook);

module.exports = router