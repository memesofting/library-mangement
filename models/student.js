import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    email: { type: String, unique: true },
    studentId: { type: String, unique: true },
    createdAt: { type: Date, default: null }
},
    { timeStamps: true }
);

export const Student = mongoose.model("Student", studentSchema)