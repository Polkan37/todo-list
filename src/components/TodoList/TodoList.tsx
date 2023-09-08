import type { ITodos } from "../../types/todos";
import TodoItem from "../TodoItem/TodoItem";

export const TodoList: React.FC<{
  todos: ITodos;
  toggleTodos: (id: string) => void;
  deleteTodos: (id: string) => void;
}> = ({ todos, toggleTodos, deleteTodos }) => {
  return (
    <div className="section__todos">
      <h2>Todos</h2>
      {todos.todos.length ? (
        <ul className="todos">
          {todos.todos.map((todo) => (
            <TodoItem
              todo={todo}
              toggleTodos={toggleTodos}
              deleteTodos={deleteTodos}
            />
          ))}
        </ul>
      ) : (
        <div>No Todo has been created</div>
      )}
    </div>
  );
};
