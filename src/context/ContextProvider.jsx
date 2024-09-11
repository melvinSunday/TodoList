import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingText, setEditingText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        todos,
        setTodos,
        editingText,
        setEditingText,
        editingIndex,
        setEditingIndex,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
