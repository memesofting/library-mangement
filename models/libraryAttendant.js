const mongoose = require("mongoose")

const libraryAttendantSchema = new mongoose({
    name: { type: String, required: true },
    staffId: { type: String, unique: true },
    createdAt: { type: Date, default: null }
},
    { timeStamps: true }
);

module.exports = mongoose.model("LibraryAttendant", libraryAttendantSchema)