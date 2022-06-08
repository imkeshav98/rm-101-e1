import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import styles from "./addTask.module.css";

const AddTask = () => {
  const { todo, handleChange } = useContext(TodoContext);
  const [taskData, setTaskData] = useState({
    done: false,
    count: 1,
  });

  function handleTask(event) {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newTask = true;

    if (taskData.text == "") {
      return;
    }
    todo.forEach((task) => {
      if (task.text === taskData.text) {
        newTask = false;
        return;
      }
    });
    if (newTask) {
      handleChange([...todo, { ...taskData, id: todo.length + 1 }]);
    }
  }

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        name="text"
        onChange={handleTask}
      />
      <button data-testid="add-task-button" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
};

export default AddTask;
