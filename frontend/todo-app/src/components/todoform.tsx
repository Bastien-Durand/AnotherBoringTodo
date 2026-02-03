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
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Add Todo</h2>
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
