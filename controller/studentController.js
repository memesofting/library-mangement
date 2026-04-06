const Student = require("../models/student")

exports.createStudent = async (req, res) => {
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

        const student = await User.create({
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