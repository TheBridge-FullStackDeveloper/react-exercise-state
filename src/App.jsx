import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask('');
    
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.done ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <span
              onClick={() => toggleDone(index)}
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              {task.done ? '✅' : '◯'}
            </span>
            <span
              onClick={() => deleteTask(index)}
              style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
