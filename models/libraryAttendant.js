import mongoose from "mongoose"

const libraryAttendantSchema = new mongoose({
    name: { type: String, required: true },
    staffId: { type: String, unique: true },
    createdAt: { type: Date, default: null }
},
    { timeStamps: true }
);

export const LibraryAttendant = mongoose.model("LibraryAttendant", libraryAttendantSchema)