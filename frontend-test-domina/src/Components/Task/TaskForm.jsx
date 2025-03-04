import React, { useState } from "react";
import taskService from "../../services/TaskService";

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await taskService.createTask(title);
    setTitle("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New Task" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
