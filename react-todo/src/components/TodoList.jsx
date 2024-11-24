// src/TodoList.jsx
import React, { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learning Testiing", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={`todo-text ${todo.completed ? "completed" : ""}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoList;
