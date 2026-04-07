const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    email: { type: String, unique: true },
    studentId: { type: String, unique: true },
    createdAt: { type: Date, default: null }
},
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema)