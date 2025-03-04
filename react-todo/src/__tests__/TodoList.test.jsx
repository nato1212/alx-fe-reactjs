import React from "react"; // Add this import
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList", () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/todo/i);
  expect(todoElement).toBeInTheDocument();
});
