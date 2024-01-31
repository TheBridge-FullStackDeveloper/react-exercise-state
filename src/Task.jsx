export function Task({ singleTask, setTasks, index }) {
  return (
    <div style={{ display: "flex" }}>
      <div className={singleTask.isDone ? "taskDone" : "taskNotDone"}>
        {singleTask.description}
      </div>

      <input
        type="radio"
        onChange={() => {
          setTasks((prev) =>
            prev.map((task, i) => {
              if (i === index) {
                //The if (i === index) statement checks if the current index (i) matches the index you want to target.
                return { ...task, isDone: true };
              } else {
                return task;
              }
            })
          );
        }}
      />

      <button
        className="x"
        onClick={() => {
          setTasks(
            (prev) => prev.filter((task) => task._id !== singleTask._id)
            //This callback function filters out the tasks that have the same _id as the singleTask being deleted
          );
        }}
      >
        x
      </button>
    </div>
  );
}
