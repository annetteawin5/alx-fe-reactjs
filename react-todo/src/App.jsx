

import React, { useState } from 'react';
import TodoList from './components/TodoList'; 
import AddTodoForm from './components/AddTodoForm'; 


const initialTodos = [
  { id: 1, text: 'Complete App.jsx state and handlers', completed: false },
  { id: 2, text: 'Fix TodoList.test.js', completed: false },
];

function App() {
  
  const [todos, setTodos] = useState(initialTodos);

  
  const handleToggleTodo = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  };

  
  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  
  const handleAddTodo = (text) => {
    const newTodo = {
        id: Date.now(), 
        text: text,
        completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  return (
    <div className="todo-app">
      <h1>My Todo App</h1>
      
      
      <AddTodoForm onAddTodo={handleAddTodo} /> 
      
      
      <TodoList 
        todos={todos} 
        onToggleTodo={handleToggleTodo} 
        onDeleteTodo={handleDeleteTodo} 
      />
    </div>
  );
}

export default App;