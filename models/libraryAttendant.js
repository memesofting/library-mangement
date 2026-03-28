const mongoose = require("mongoose")

const libraryAttendantSchema = new mongoose({
    name: { type: String, required: true }
},
    { timeStamps: true });