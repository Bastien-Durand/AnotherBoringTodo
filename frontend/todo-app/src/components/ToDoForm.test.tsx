import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ToDoForm } from "./ToDoForm";

afterEach(() => {
  cleanup();
});

describe("ToDoForm", () => {
  it("Renders the title input field", () => {
    render(<ToDoForm onAddTodo={vi.fn()} />);
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
  });

  it("Checks that input fields can be filled by a user", () => {
    render(<ToDoForm onAddTodo={vi.fn()} />);
    const titleInput = screen.getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: "Clean Room" } });
    expect(titleInput).toHaveValue("Clean Room");
  });
  it("Renders the description input field", () => {
    render(<ToDoForm onAddTodo={vi.fn()} />);
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  it("Checks the description input field can be filled by a user", () => {
    render(<ToDoForm onAddTodo={vi.fn()} />);
    const descriptionInput = screen.getByLabelText("Description");
    fireEvent.change(descriptionInput, {
      target: { value: "Vacuum Floor, Hang Clothes" },
    });
    expect(descriptionInput).toHaveValue("Vacuum Floor, Hang Clothes");
  });

  it("Renders the submit button", () => {
    render(<ToDoForm onAddTodo={vi.fn()} />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("Submits the form with title and description", () => {
    const mockOnAddTodo = vi.fn();
    render(<ToDoForm onAddTodo={mockOnAddTodo} />);

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Clean Room" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Vacuum Floor" },
    });
    fireEvent.click(screen.getByText("Submit"));

    expect(mockOnAddTodo).toHaveBeenCalledWith({
      title: "Clean Room",
      description: "Vacuum Floor",
    });
  });
});
