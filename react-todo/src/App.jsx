// App.jsx

import React, { useState } from 'react';
import TodoList from './components/TodoList'; 
import AddTodoForm from './components/AddTodoForm'; 

// Sample initial data for the todo list
const initialTodos = [
  { id: 1, text: 'Complete App.jsx state and handlers', completed: false },
  { id: 2, text: 'Fix TodoList.test.js', completed: false },
];

function App() {
  // 1. STATE: Manages the list of tasks
  const [todos, setTodos] = useState(initialTodos);

  // 2. HANDLER: Toggles the 'completed' status (for TodoList)
  const handleToggleTodo = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  };

  // 3. HANDLER: Deletes a todo item (for TodoList)
  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 4. HANDLER: Adds a new todo item (for AddTodoForm)
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
      
      {/* 🛑 Pass the handler to the AddTodoForm */}
      <AddTodoForm onAddTodo={handleAddTodo} /> 
      
      {/* 🛑 PASS ALL REQUIRED PROPS to prevent the 'map' error */}
      <TodoList 
        todos={todos} 
        onToggleTodo={handleToggleTodo} 
        onDeleteTodo={handleDeleteTodo} 
      />
    </div>
  );
}

export default App;