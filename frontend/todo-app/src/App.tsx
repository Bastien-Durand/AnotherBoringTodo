import { useState } from "react";
import { TodoForm } from "./components/todoform";

import "./App.css";

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   id: number;
// }

const App = () => {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <TodoForm />
      </div>
    </>
  );
};

export default App;
