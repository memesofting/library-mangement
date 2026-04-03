const express = require("express");
const indexRouter = require("./routes/index")
const dbConnection = require("./config/db")

const app = express();
app.use(express.json());

app.use(dbConnection)
app.use('/', indexRouter)

app.listen(8080)