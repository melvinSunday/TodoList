import TodoApp from "./components/TodoApp";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#D2B48C] via-[#DEB887] to-[#F5F5DC] h-screen flex justify-center items-center">
        <TodoApp />
        <TodoList />
      </div>
    </>
  );
};

export default App;
