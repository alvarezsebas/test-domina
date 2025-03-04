import React, { useState, useEffect } from "react";
import taskService from "../services/TaskService";
import "../styles/Task.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await taskService.getTasks();
    setTasks(data);
  };

  const addTask = async () => {
    if (newTask.trim() === "") return;
    await taskService.createTask(newTask);
    setNewTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    fetchTasks();
  };

  const updateTask = async (id) => {
    if (editText.trim() === "") return;
    await taskService.updateTask(id, { tarea: editText });
    setEditingTask(null);
    setEditText("");
    fetchTasks();
  };

  return (
    <div className="wrapper">
      <h1>Tasks</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={addTask}>Nueva tarea</button>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            {editingTask === task._id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span>{task.tarea}</span>
            )}
            <div className="actions">
              {editingTask === task._id ? (
                <button onClick={() => updateTask(task._id)}>Actualizar</button>
              ) : (
                <button onClick={() => {
                  setEditingTask(task._id);
                  setEditText(task.tarea);
                }}>Editar</button>
              )}
              <button onClick={() => deleteTask(task._id)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
