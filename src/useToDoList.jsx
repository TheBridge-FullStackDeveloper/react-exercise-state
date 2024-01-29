import React from "react";
import { useToDoManager } from "./hooks/useToDoManager";

export const ToDoList = () => {
  const { tasks, newTask, inputChange, addTask, toggleComplete, deleteTask } =
    useToDoManager();
  return (
    <div className="App">
      <h1>To do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={inputChange}
      />
      <button onClick={addTask}>Add Task</button>




      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span> 
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(i)}
            />
            <button onClick={() => deleteTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
