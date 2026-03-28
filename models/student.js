const mongoose = require("mongoose")

const studenSchema = new mongoose({
    name: { type: String, required: true },
},
    { timeStamps: true });