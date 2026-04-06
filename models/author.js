import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    createdAt: { type: Date, default: null }
},
    { timestamps: true }
);

export const Author = mongoose.model("Author", authorSchema)