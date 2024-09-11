import TodoApp from "./components/TodoApp";
import TodoList from "./components/TodoList";
import "/fonts.css";
import { ContextProvider } from "./context/ContextProvider";
import TodosStats from "./components/TodosStats";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#4A2511] via-[#5D3A1A] to-[#704214] h-screen flex justify-center flex-col items-center">
        <ContextProvider>
          <TodosStats/>
          <TodoApp />
          <TodoList />
        </ContextProvider>
      </div>
    </>
  );
};

export default App;
