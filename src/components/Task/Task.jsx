import React, { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = () => {
  const { todo, handleChange } = useContext(TodoContext);
  return (
    <>
      {todo.map((task) => (
        <li data-testid="task" className={styles.task}>
          <input type="checkbox" data-testid="task-checkbox" />
          <div data-testid="task-text">{task.text}</div>
          <Counter countvalue={task.count} />
          <button data-testid="task-remove-button">x</button>
        </li>
      ))}
    </>
  );
};

export default Task;
