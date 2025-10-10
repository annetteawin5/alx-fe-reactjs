import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList and adds a new task", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new task/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Learn React Testing" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
});