import { useState, useEffect } from "react";
import { TodoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import type { Todo } from "./types/Todo";
import "./App.css";

const App = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]); // Runs every time allTodos changes

  const addTodo = (data: { title: string; description: string }) => {
    const todo = { ...data, id: Date.now(), completed: false };
    setAllTodos((value) => [...value, todo]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = allTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setAllTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h1>Another boring todo</h1>
        <TodoForm onAddTodo={addTodo} />
        <ToDoList
          allTodos={allTodos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </>
  );
};

export default App;
