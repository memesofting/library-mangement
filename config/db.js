const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoDb);
        console.log("mongodb is connected successfully");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDb