const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tarea: String,
});

module.exports = mongoose.model("Task", TaskSchema);
