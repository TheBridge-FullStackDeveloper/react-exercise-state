export function Task({ singleTask, setTasks, index }) {
  return (
    <div style={{ display: "flex" }}>
      <p className={singleTask.isDone ? "taskDone" : "taskNotDone"}>
        {singleTask.description}
      </p>

      <input
        type="radio"
        onChange={() => {
          setTasks((prev) =>
            prev.map((task, i) =>
              i === index ? { ...task, isDone: !task.isDone } : task
            )
          );
        }}
      />

      <button
        className="x"
        onClick={() => {
          setTasks((prev) =>
            prev.filter((task) => task._id !== singleTask._id)
          );
        }}
      >
        x
      </button>
    </div>
  );
}
