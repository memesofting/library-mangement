const mongoose = require("mongoose")

const libraryAttendantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    staffId: { type: String, unique: true },
    createdAt: { type: Date, default: null }
},
    { timestamps: true }
);

module.exports = mongoose.model("LibraryAttendant", libraryAttendantSchema)