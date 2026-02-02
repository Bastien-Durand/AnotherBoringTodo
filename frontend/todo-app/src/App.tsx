import { useState } from "react";
import { TodoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import type { Todo } from "./types/Todo";
import "./App.css";

const App = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const addTodo = (data: { title: string; description: string }) => {
    const todo = { ...data, id: Date.now(), completed: false };
    setAllTodos((value) => [...value, todo]);
  };

  return (
    <>
      <div>
        <h1>App.jsx</h1>
        <TodoForm onAddTodo={addTodo} />
        <ToDoList allTodos={allTodos} />
      </div>
    </>
  );
};

export default App;
