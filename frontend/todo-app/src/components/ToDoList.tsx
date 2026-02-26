import type { Todo } from "../types/Todo";
import styles from "./ToDoList.module.css";

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
      {allTodos.map((todo) => (
        <div
          key={todo._id}
          className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}
        >
          <div className={styles.todoContent}>
            <div className={styles.todoTitle}>{todo.title}</div>
            <div className={styles.todoDescription}>{todo.description}</div>
          </div>
          <div className={styles.actions}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleTodo(todo._id)}
              className={styles.checkbox}
            />
            <button
              onClick={() => onDeleteTodo(todo._id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
