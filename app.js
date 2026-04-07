const express = require("express");

const studentRouter = require("./routes/studentsRoute.js");

const app = express();
app.use(express.json());

app.use("/student", studentRouter)

module.exports = app;