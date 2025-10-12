

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; 

describe('TodoList Component', () => {
  

  const sampleTodos = [
    { id: 1, text: 'Task One', completed: false },
    { id: 2, text: 'Task Two', completed: true },
    { id: 3, text: 'Task to Delete', completed: false },
  ];
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  
  test('renders all todo items passed in props', () => {
    render(
      <TodoList 
        todos={sampleTodos} 
        onToggleTodo={mockToggle} 
        onDeleteTodo={mockDelete} 
      />
    );
    
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(screen.getByText('Task One')).toBeInTheDocument();
  });

  
  test('calls onDeleteTodo when the delete button is clicked', () => {
    render(
      <TodoList 
        todos={sampleTodos} 
        onToggleTodo={mockToggle} 
        onDeleteTodo={mockDelete} 
      />
    );
    
    
    const deleteButtons = screen.getAllByText('Delete');
    
    
    fireEvent.click(deleteButtons[2]); 
    
    
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith(3);
  });
});