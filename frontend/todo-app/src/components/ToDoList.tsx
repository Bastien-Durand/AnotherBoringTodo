import type { Todo } from "../types/Todo";

interface TodoListProps {
  allTodos: Todo[];
}

export const ToDoList = ({ allTodos }: TodoListProps) => {
  return (
    <div>
      <h1>All Todos</h1>
      {allTodos.map((todo) => (
        <div key={todo.id}>
          <strong>
            Title: {todo.title} : {todo.description}
          </strong>
        </div>
      ))}
    </div>
  );
};
