const express = require("express")
const { borrowBook, createBook } = require("../controller/bookController.js")

const router = express.Router();
router.route('/').post(createBook);
router.route('/borrow').post(borrowBook);

module.exports = router