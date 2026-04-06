import express from "express"
import dbConnection from "./config/db.js"
import indexRouter from "./index.js"
import studentRouter from "./routes/studentsRoute.js"

const app = express();
app.use(express.json());

app.use(dbConnection)
app.use('/', indexRouter)
app.use('/student', studentRouter)

app.listen(8000)