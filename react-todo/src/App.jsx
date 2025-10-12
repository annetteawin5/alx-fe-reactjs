

import React, { useState } from 'react';
import TodoList from './components/TodoList'; 
import AddTodoForm from './components/AddTodoForm'; 


const initialTodos = [
  { id: 1, text: 'Fix the implementation checks', completed: true },
  { id: 2, text: 'Write passing tests', completed: false },
  { id: 3, text: 'Celebrate success', completed: false },
];

function App() {
  
  const [todos, setTodos] = useState(initialTodos);

  
  const handleAddTodo = (text) => {
    const newTodo = {
        id: Date.now(), 
        text: text,
        completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  
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

export default App;