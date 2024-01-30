import { useState } from "react";
import "./app.css";
import { Task } from "./Task";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <p style={{ fontWeight: "bold" }}>My to do list</p>

      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setTasks((prev) => [
              ...prev,
              {
                description: input,
                isDone: false,
                _id: tasks.length + 1,
              },
            ]);
            setInput(""); // Clear input field
          }
        }}
        placeholder="Add TO DO"
      />

      <br />
      <br />

      <div>
        <button
          onClick={() => {
            setTasks((prev) => [
              ...prev,
              {
                description: input,
                isDone: false,
                _id: tasks.length + 1,
              },
            ]);
            setInput(""); // Clear input field
          }}
        >
          Add the task
        </button>
      </div>

      <div>
        {tasks.map((singleTask, index) => {
          return <Task key={index} singleTask={singleTask} />;
        })}
      </div>
    </>
  );
}
