import { useState } from "react";

export const TodoForm = ({
  onAddTodo,
}: {
  onAddTodo: (data: { title: string; description: string }) => void;
}) => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });

  //Add type to e?
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo(todoData);
    setTodoData({ title: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData({
      ...todoData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Todo Form</h2>
      <div className="Card">
        <form action="submit" onSubmit={handleSubmit}>
          <div>
            Title:{" "}
            <input
              name="title"
              value={todoData.title}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            Description{" "}
            <input
              name="description"
              value={todoData.description}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
