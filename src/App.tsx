import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { TodosComponent } from './components/Todos/TodosComponent'
import { AddTodoComponent } from './components/AddTodo/AddTodoComponent';
import type { ITodos } from './types/todos'

import './App.css'

function App() {
  const [todos, setTodos] = React.useState<ITodos>({todos: []});
  const addTodos = (title: string) => { 
    const generatedId = uuidv4();
    setTodos({
      todos: [
        {title, completed: false, id: generatedId}, 
        ...todos.todos
      ]
    });
  };
  const deleteTodos = (id: string) => {
    setTodos({
      todos: todos.todos.filter(t => t.id !== id)
    });
  };
  const toggleTodos = (id: string) => {
    setTodos({
      todos: todos.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    });
  }

  return (
    <div className="App">
      <AddTodoComponent addTodos={addTodos} />
      <hr />
      <TodosComponent 
        todos={todos} 
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;


