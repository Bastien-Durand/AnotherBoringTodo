import { useState } from "react";
import styles from "./TodoForm.module.css";

export const ToDoForm = ({
  onAddTodo,
}: {
  onAddTodo: (data: { title: string; description: string }) => void;
}) => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      todoData.title.trim().length === 0 ||
      todoData.description.trim().length === 0
    ) {
      setError("Please fill in both title and description");
      return;
    }
    setError("");
    onAddTodo(todoData);
    setTodoData({ title: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData({
      ...todoData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add Todo</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              id="title"
              name="title"
              value={todoData.title}
              type="text"
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <input
              id="description"
              name="description"
              value={todoData.description}
              type="text"
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
