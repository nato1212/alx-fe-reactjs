import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Update with the correct path

test("renders TodoList", () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/todo/i);
  expect(todoElement).toBeInTheDocument();
});
