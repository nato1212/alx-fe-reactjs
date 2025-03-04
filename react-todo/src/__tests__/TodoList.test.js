// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders TodoList correctly", () => {
    render(<TodoList />);
    const todoText = screen.getByText(/Learn React/i);
    expect(todoText).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
