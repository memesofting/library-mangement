const express = require("express")
const { borrowBookBook } = require("../controller/bookController.js")

const router = express.Router();
router.route('/borrow').post(borrowBookBook);

module.exports = router