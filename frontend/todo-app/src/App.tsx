import { useState, useEffect } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import type { Todo } from "./types/Todo";
import "./App.css";

const App = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const API_URL = "https://anotherboringtodo-backend.onrender.com";

  const getAllTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      setAllTodos(await response.json());
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const addTodo = async (data: { title: string; description: string }) => {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      getAllTodos();
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  const deleteTodo = async (_id: string) => {
    try {
      const response = await fetch(`${API_URL}/todos/${_id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      getAllTodos();
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  const toggleTodo = async (_id: string) => {
    const todo = allTodos.find((todo) => todo._id === _id);
    try {
      const response = await fetch(`${API_URL}/todos/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todo?.completed }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      getAllTodos();
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  };

  return (
    <>
      <div>
        <h1>Another boring todo</h1>
        <ToDoForm onAddTodo={addTodo} />
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
