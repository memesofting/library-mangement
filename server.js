require("dotenv").config({
    path: './.env'
});
const app = require("./app.js");
const dbConnection = require("./config/db.js");

const startServer = async () => {
    try {
        await dbConnection()
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        });
        app.listen(8000, () => {
            console.log("Server running on port 8000")
        })
    } catch (error) {
        console.error("Startup failed", error)
        process.exit(1)
    }
}

startServer()