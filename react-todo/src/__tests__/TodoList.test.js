// TodoList.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; 

describe('TodoList Component', () => {
  
  
  const sampleTodos = [
    { id: 1, text: 'forever', completed: false },
    { id: 2, text: 'i love you', completed: true },
    { id: 3, text: 'Delete Me', completed: false },
  ];
  
  
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  
  const renderTodoList = (todos = sampleTodos) => {
    render(
      <TodoList 
        todos={todos} 
        onToggleTodo={mockToggle} 
        onDeleteTodo={mockDelete} 
      />
    );
  };
  

  test('renders the correct number of todo items and text', () => {
    renderTodoList();
    
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    
    
    expect(screen.getByText(/Walk Dog/i)).toBeInTheDocument();
  });
  
  
  test('calls onToggleTodo when an item is clicked', () => {
    renderTodoList();
    
  
    fireEvent.click(screen.getByText('Buy Milk'));
    
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  
  test('calls onDeleteTodo when the delete button is clicked', () => {
    renderTodoList();
    
    
    
    const deleteButtons = screen.getAllByText('Delete');
    
    
    fireEvent.click(deleteButtons[2]); 
    
    
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith(3);
  });
  
});