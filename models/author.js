const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    createdAt: { type: Date, default: null }
},
    { timestamps: true }
);

module.exports = mongoose.model("Author", authorSchema)