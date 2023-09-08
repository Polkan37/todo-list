import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { TodoList } from './components/TodoList/TodoList'
import { AddTodo } from './components/AddTodo/AddTodo';
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
      <h2>To Do List:</h2>
      <AddTodo addTodos={addTodos} />
      <hr />
      <TodoList 
        todos={todos} 
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;


