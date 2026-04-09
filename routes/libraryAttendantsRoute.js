const express = require("express");

const { createLibraryAttendant, getAllLibraryAttendants } = require("../controller/libraryAttendantController")

const router = express.Router();

router.route('/').post(createLibraryAttendant);
router.route('/').get(getAllLibraryAttendants);

module.exports = router;