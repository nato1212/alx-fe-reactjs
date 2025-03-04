// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    // Check if the initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);

    // Find the input and button elements
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    // Check if the new todo is displayed
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle a todo completion", () => {
    render(<TodoList />);

    // Find the first todo and click to toggle completion
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    // Check if the todo is completed (line-through style)
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);

    // Find and click the delete button for the first todo
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    // Check that the todo is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
