import { useState } from "react";
import "./app.css";
import { Task } from "./Task";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="divFather">
        <div style={{ fontWeight: "bold" }}>My to do list</div>

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
              setInput("");
            }
          }}
          placeholder="Add TO DO"
        />

        <div>
          <button
            className="button-4"
            onClick={() => {
              setTasks((prev) => [
                ...prev,
                {
                  description: input,
                  isDone: false,
                  _id: tasks.length + 1,
                },
              ]);
              setInput("");
            }}
          >
            Add the task
          </button>
        </div>

        <div className="divFather">
          {tasks.map((singleTask, index) => (
            <Task
              key={index}
              singleTask={singleTask}
              setTasks={setTasks}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
