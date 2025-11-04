import React, { useState } from "react";
import Todo from "./Todo";
import "./styles.css";

export default function App() {
  // App-level state: list of todos
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return; // ignore empty/whitespace-only
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">To-Do List</h1>
      {/* Todo component renders input, button, and list UI */}
      <Todo todos={todos} onAdd={addTodo} onDelete={deleteTodo} />
    </div>
  );
}
