import React, { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = () => {
  const { todo, handleChange } = useContext(TodoContext);

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        <Task />
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
