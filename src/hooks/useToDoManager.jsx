import { useState } from "react";

export const useToDoManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const inputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (i) => {
    const updatedTasks = [...tasks];
    updatedTasks[i].completed = !updatedTasks[i].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (i) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
  };

  return {
    tasks,
    setTasks,
    newTask,
    setNewTask,
    inputChange,
    addTask,
    toggleComplete,
    deleteTask,
  };
};
