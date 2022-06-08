import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  const { todo } = useContext(TodoContext);
  // sample values to be replaced
  let totalTask = todo.length;
  let unCompletedTask = todo.filter((task) => !task.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <span>You have </span>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <span> of </span>
      <b data-testid="header-total-task">{totalTask}</b>
      <span> tasks remaining </span>
    </div>
  );
};

export default TaskHeader;
