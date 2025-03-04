import React from "react";
import taskService from "../../services/TaskService";

const TaskList = ({ tasks, refreshTasks }) => {
  const handleDelete = async (id) => {
    await taskService.deleteTask(id);
    refreshTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
