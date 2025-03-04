// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    // Check if the initial todo items are displayed
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);

    // Find the input field and button
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add Todo");

    // Simulate user input and click
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    // Verify that the new todo was added
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle a todo completion", () => {
    render(<TodoList />);

    // Find the first todo item and toggle its completion
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    // Check if the todo is marked as completed
    expect(todo).toHaveClass("completed");
  });

  test("can delete a todo", () => {
    render(<TodoList />);

    // Find the delete button for the first todo item and click it
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    // Verify that the todo has been deleted
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
