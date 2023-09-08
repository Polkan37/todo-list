import type { ITodos } from '../../types/todos'
import Button from '../Button/Button';

export const TodosComponent: React.FC<{
    todos: ITodos, 
    toggleTodos: (id: string) => void,
    deleteTodos: (id: string) => void
  }> = ({todos, toggleTodos, deleteTodos}) => {
    const deleteTodo = (id: string) => {
      if (window.confirm(`Are you sure you want to delete todo?`)) {
        deleteTodos(id);
      }
    }
    return (
      <div className="section__todos">
      <h2>Todos</h2>
      {todos.todos.length ? <ul className="todos">
        {todos.todos.map(todo => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.completed? 'line-through': 'none'}}>{todo.title}</span>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodos(todo.id)} />
              <Button text='X' color='red' onClick={() => {deleteTodo(todo.id)}} />
          </li>
        ))}
      </ul>: <div>No Todo has been created</div>}
    </div>
    );
  };