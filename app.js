const express = require("express");

const studentRouter = require("./routes/studentsRoute.js");
const bookRouter = require("./routes/booksRoute.js");
const libraryAttendantRouter = require("./routes/libraryAttendantsRoute.js")

const app = express();
app.use(express.json());

app.use("/student", studentRouter)
app.use("/book", bookRouter)
app.use("/library-attendant", libraryAttendantRouter)

module.exports = app;