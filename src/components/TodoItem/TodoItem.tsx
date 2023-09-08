import React, { FC } from "react";
import type { ITodo } from "../../types/todos";
import Button from "../Button/Button";

const TodoItem: React.FC<{
  todo: ITodo;
  toggleTodos: (id: string) => void;
  deleteTodos: (id: string) => void;
}> = ({ todo, toggleTodos, deleteTodos }) => {
  const deleteTodo = (id: string) => {
    if (window.confirm(`Are you sure you want to delete todo?`)) {
      deleteTodos(id);
    }
  };

  return (
    <li key={todo.id}>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodos(todo.id)}
      />
      <Button
        text="X"
        color="red"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      />
    </li>
  );
};

export default TodoItem;
