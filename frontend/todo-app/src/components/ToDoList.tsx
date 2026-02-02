import type { Todo } from "../types/Todo";

interface TodoListProps {
  allTodos: Todo[];
  onDeleteTodo: (id: number) => void;
}

export const ToDoList = ({ allTodos, onDeleteTodo }: TodoListProps) => {
  return (
    <div>
      <h1>All Todos</h1>
      {allTodos.map((todo) => (
        <div key={todo.id}>
          <strong>
            Title: {todo.title} : {todo.description}
          </strong>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
