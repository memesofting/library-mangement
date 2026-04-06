import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.mongoDb}`);
        console.log("mongodb is connected successfully");
    }
    catch (error) {
        console.error("MongoDb connection failed", error);
        process.exit(1);
    }
}

export default connectDb