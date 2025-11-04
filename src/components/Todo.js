import React, { useState } from "react";

export default function Todo({ todos, onAdd, onDelete }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    onAdd(input);
    setInput(""); // clear on successful add
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="todo">
      {/* Input + Add button */}
      <div className="controls">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="todo-input"
        />
        <button className="add-btn" onClick={handleAdd}>
          Add Todo
        </button>
      </div>

      {/* Task list */}
      <ul className="list">
        {todos.map((t) => (
          <li key={t.id} className="list-item">
            <span className="task-text">{t.text}</span>
            <button className="delete-btn" onClick={() => onDelete(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
