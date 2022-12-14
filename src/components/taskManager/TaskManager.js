import Task from "./Task";

// styles
import "./TaskManager.css";

const TaskManager = () => {
  return (
    <div className="--bg-primary">
      <h1 className="--text-center --text-light">Tasks Manager</h1>
      <div className="--flex-center --p">
        <div className="--card --bg-light --width-500px --p --flex-center">
          <form className="form --form-control">
            <div>
              <label htmlFor="name">Task:</label>
              <input type="text" placeholder="Task name" name="name" />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" placeholder="Task name" name="date" />
            </div>
            <button className="--btn --btn-success --btn-block">
              Save Task
            </button>
          </form>
        </div>
      </div>
      {/* Display Task */}
      <article className="--flex-center --my2">
        <div className="--width-500px --p">
          <h2 className="--text-light">Task List</h2>
          <hr styles={{ background: "#fff" }} />
          <Task />
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
