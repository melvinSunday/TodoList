import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { motion } from "framer-motion";

const TodosCount = () => {
  const { todos } = useContext(Context);
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[rgb(255,254,253)] bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-md mb-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-[#7a4722] mb-2">Todo Statistics</h2>
      <div className="flex flex-col sm:flex-row justify-between">
        <motion.p
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-[#6B3E26] mb-2 sm:mb-0"
        >
          Total todos: <span className="font-semibold">{todos.length}</span>
        </motion.p>
        <motion.p
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-[#6B3E26] mb-2 sm:mb-0"
        >
          Completed: <span className="font-semibold">{completedTodos}</span>
        </motion.p>
        <motion.p
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-[#6B3E26]"
        >
          Pending: <span className="font-semibold">{todos.length - completedTodos}</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TodosCount;
