import { useState } from "react";

export const TodoForm = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });

  //Add type to e?
  const handleSubmit = (event) => {
    event.prevent.default();
  };

  const handleChange = () => {
    return;
  };

  return (
    <div>
      <h2>Todo Form</h2>
      <div className="Card">
        <form action="">
          <div>
            Title: <input />
          </div>
          <div>
            Description <input />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

//On submit the button needs to save to state
