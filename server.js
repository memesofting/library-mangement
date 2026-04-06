const express = require("express");
const dbConnection = require("./config/db")
const indexRouter = require("./index")
const studentRouter = require("./routes/studentsRoute")

const app = express();
app.use(express.json());

app.use(dbConnection)
app.use('/', indexRouter)
app.use('/student', studentRouter)

app.listen(8000)