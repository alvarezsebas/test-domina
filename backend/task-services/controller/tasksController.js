
const Task = require("../models/tasksModel");

exports.createTask = async (req, res) => {
    const { tarea } = req.body;

    const task = new Task({ tarea, userId: req.user.userId });
    await task.save();
    res.json(task);
};

exports.getTasks = async (req, res) => {
    
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { tarea } = req.body;
    const task = await Task.findByIdAndUpdate(id, { tarea }, { new: true });
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Tarea eliminada" });
};
