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
    const todos = [{ id: 1, text: "Learn React", completed: false }];
    const toggleTodo = jest.fn((id) => {
      todos[0].completed = !todos[0].completed;
    });

    render(<TodoList todos={todos} onToggle={toggleTodo} />);

    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);

    expect(toggleTodo).toHaveBeenCalledWith(1);

    todos[0].completed = true;
    render(<TodoList todos={todos} onToggle={toggleTodo} />);

    const updatedTodoItem = screen.getByText("Learn React");
    expect(updatedTodoItem).toHaveClass("completed");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText("Delete");
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(deleteButtons[0]);

    expect(todoItem).not.toBeInTheDocument();
  });
});
