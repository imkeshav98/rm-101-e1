import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const handleChange = (data) => {
    setTodo(data);
  };
  return (
    <TodoContext.Provider value={{ todo, handleChange }}>
      {children}
    </TodoContext.Provider>
  );
};
