import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = () => {
  return (
    <div className="task">
      <span>
        <p>
          <b>Task:</b> Task one
        </p>
        <p>
          <b>Date:</b> 2022-02-22
        </p>
      </span>
      <span>
        <button>
          <FaEdit color="green" size={20} />
        </button>
        <button>
          <FaTrashAlt color="red" size={20} />
        </button>
        <button>
          <FaCheckDouble color="purple" size={20} />
        </button>
      </span>
    </div>
  );
};

export default Task;
