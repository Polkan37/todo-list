import React from "react";
import Button from "../Button/Button";

export const AddTodo = ({ addTodos }: { addTodos: (text: string) => void }) => {
  const [todo, setTodo] = React.useState<string>("");
  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter a todo");
      return;
    }
    addTodos(todo);
    setTodo("");
  };

  return (
    <div className="AddTodo">
      <form>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button text="Add" onClick={submit} />
      </form>
    </div>
  );
};
