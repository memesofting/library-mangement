const LibraryAttendant = require("../models/libraryAttendant.js")

const createLibraryAttendant = async (req, res) => {
    try {
        const { name, email, staffId } = req.body

        if (!name || !email || !staffId) {
            return res.status(400).json({
                message: "staffName and staffId are required"
            })
        }

        const existing = await LibraryAttendant.findOne({ email: email.toLowerCase() })

        if (existing) {
            res.status(400).json({
                message: "Library attendant already exists"
            })
        }
        const libraryAttendant = await LibraryAttendant.create({
            name,
            email: email.toLowerCase(),
            staffId
        })
        res.status(201).json({
            message: "library attendandt created successfully",
            attendant: { id: libraryAttendant._id, staffName: libraryAttendant.name, }
        })
    } catch (error) {
        res.status(500).json({
            errorMessage: "Internal server error",
            error: error.message
        })
    }
}

const getAllLibraryAttendants = async (req, res) => {
    try {
        const libraryAttendants = await LibraryAttendant.find();
        res.status(200).json({
            message: "All students",
            libraryAttendants
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

module.exports = { createLibraryAttendant, getAllLibraryAttendants }