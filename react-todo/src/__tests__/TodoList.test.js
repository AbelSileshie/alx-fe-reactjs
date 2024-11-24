import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/Todolist";

describe("TodoList Component", () => {
  test("renders the TodoList with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles the completion status of a todo", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass("line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText("Delete")[0];
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
