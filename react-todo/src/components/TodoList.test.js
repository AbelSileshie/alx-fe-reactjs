import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learning Testiing")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("allows users to toggle a todo completed status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learning Testiing");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("allows users to delete a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learning Testiing")).not.toBeInTheDocument();
  });
});
