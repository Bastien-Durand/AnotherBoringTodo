import type { Todo } from "../types/Todo";
import styles from "./TodoList.module.css";

interface TodoListProps {
  allTodos: Todo[];
  onDeleteTodo: (_id: string) => void;
  onToggleTodo: (_id: string) => void;
}

export const ToDoList = ({
  allTodos,
  onDeleteTodo,
  onToggleTodo,
}: TodoListProps) => {
  return (
    <div className={styles.container}>
      <h2>View Todos</h2>
      {allTodos.map((todo) => (
        <div key={todo._id} className={styles.todoItem}>
          <div className={styles.todoContent}>
            <div
              className={`${styles.todoTitle} ${todo.completed ? styles.completed : ""}`}
            >
              {todo.title}
            </div>
            <div className={styles.todoDescription}>{todo.description}</div>
          </div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              onToggleTodo(todo._id);
            }}
          ></input>
          <button
            onClick={() => onDeleteTodo(todo._id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
