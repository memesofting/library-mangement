const mongoose = require("mongoose")

const studenSchema = new mongoose({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    studentId: { type: String, unique: true },
    createdAt: { type: Date, default: null }
},
    { timeStamps: true });