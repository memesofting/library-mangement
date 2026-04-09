const Student = require("../models/student.js")

const createStudent = async (req, res) => {
    try {
        const { studentName, email, studentId } = req.body;

        if (!studentName || !email || !studentId) {
            return res.status(400).json({
                message: "All fields are required!!!"
            })
        }
        // check if student already exist

        const existing = await Student.findOne({ email: email.toLowerCase() });

        if (existing) {
            return res.status(400).json({
                message: "Student already exist, please login."
            })
        }

        // create student

        const student = await Student.create({
            studentName,
            email: email.toLowerCase(),
            studentId
        });
        res.status(201).json({
            message: "student created",
            student: { id: student._id, studentName: student.studentName, email: student.email, createdAt: student._createdAt }
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            message: "All students",
            students
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        res.status(200).json({
            message: "Student found",
            student
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

module.exports = { createStudent, getAllStudents, getStudentById }