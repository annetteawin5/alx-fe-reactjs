import React from 'react';


const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          
          onClick={() => onToggleTodo(todo.id)}
         
           
        >
          <span>{todo.text}</span>
          
          
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              onDeleteTodo(todo.id);
            }}
            
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;