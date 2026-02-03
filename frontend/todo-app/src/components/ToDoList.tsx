import type { Todo } from "../types/Todo";
import styles from "./TodoList.module.css";

interface TodoListProps {
  allTodos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const ToDoList = ({
  allTodos,
  onDeleteTodo,
  onToggleTodo,
}: TodoListProps) => {
  return (
    <div className={styles.container}>
      <h1>All Todos</h1>
      {allTodos.map((todo) => (
        <div key={todo.id} className={styles.todoItem}>
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
              onToggleTodo(todo.id);
            }}
          ></input>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
