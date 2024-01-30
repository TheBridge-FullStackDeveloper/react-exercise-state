import { useState } from "react";

export function Task({ singleTask }) {
  const [done, setDone] = useState(singleTask.isDone);
  return (
    <div style={{ display: "flex" }}>
      <p className={done ? "taskDone" : "taskNotDone"}>
        {singleTask.description}
      </p>
      <input
        type="radio"
        onChange={(e) => {
          console.log("target value ", e.target.value);
          setDone(true);
        }}
      />
    </div>
  );
}
