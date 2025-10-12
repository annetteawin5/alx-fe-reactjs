// TodoList.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // Make sure this path is correct

describe('TodoList Component', () => {
  
  // Define sample data and mock functions
  const sampleTodos = [
    { id: 1, text: 'Task One', completed: false },
    { id: 2, text: 'Task Two', completed: true },
    { id: 3, text: 'Task to Delete', completed: false },
  ];
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  // Test 1: Checks if the list renders the correct number of items
  test('renders all todo items passed in props', () => {
    render(
      <TodoList 
        todos={sampleTodos} 
        onToggleTodo={mockToggle} 
        onDeleteTodo={mockDelete} 
      />
    );
    
    // Checks for all three items by the listitem role
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(screen.getByText('Task One')).toBeInTheDocument();
  });

  // Test 2: Checks if the deletion handler is called (Addressing the assignment's delete requirement)
  test('calls onDeleteTodo when the delete button is clicked', () => {
    render(
      <TodoList 
        todos={sampleTodos} 
        onToggleTodo={mockToggle} 
        onDeleteTodo={mockDelete} 
      />
    );
    
    // Find all 'Delete' buttons
    const deleteButtons = screen.getAllByText('Delete');
    
    // Click the delete button for the third item (ID 3)
    fireEvent.click(deleteButtons[2]); 
    
    // Assert that the mock delete function was called once with the correct ID
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith(3);
  });
});