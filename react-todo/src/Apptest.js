import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; 

const getTodoListItem = (text) => screen.getByText(text).closest('li');

describe('Todo List Component Tests', () => {
  
  test('renders initial todos and checks for the correct count', () => {
    render(<App />);
    
    expect(screen.getByText(/Build the TodoList component/i)).toBeInTheDocument();
    expect(screen.getByText(/Write comprehensive tests/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('allows a user to add a new todo item', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
    const addButton = screen.getByRole('button', { name: /Add Todo/i });
    
    const newTodoText = 'Walk the dog';

    fireEvent.change(inputElement, { target: { value: newTodoText } });
    fireEvent.click(addButton);

    expect(screen.getByText(newTodoText)).toBeInTheDocument();
    expect(inputElement.value).toBe('');
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  test('allows a user to toggle a todo item to completed and back', () => {
    render(<App />);
    const todoText = 'Write comprehensive tests';
    
    const todoItem = getTodoListItem(todoText);
    
    
    fireEvent.click(todoItem);
    
  
    fireEvent.click(todoItem);
  });

  test('allows a user to delete a todo item', () => {
    render(<App />);
    const todoToDeleteText = 'Review component requirements';
    
    expect(screen.getByText(todoToDeleteText)).toBeInTheDocument();
    
    const listItem = getTodoListItem(todoToDeleteText);
    const deleteButton = within(listItem).getByRole('button', { name: /Delete/i });

    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoToDeleteText)).not.toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
