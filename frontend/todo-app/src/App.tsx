import { useState } from "react";
import { TodoForm } from "./components/todoform";

import "./App.css";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  id: number;
}

const App = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const addTodo = (data: { title: string; description: string }) => {
    const todo = { ...data, id: 0, completed: false };
    setAllTodos((value) => [...value, todo]);

    console.log(allTodos);
  };

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <TodoForm onAddTodo={addTodo} />
      </div>
    </>
  );
};

export default App;
