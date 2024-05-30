import React, { useState, useCallback, useMemo } from 'react';
import '../App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = useCallback(() => {
    if (input.trim() !== "") {
      setTodos(prevTodos => [...prevTodos, input]);
      setInput('');
    }
  }, [input]);

  const delTodo = useCallback((index) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  }, []);

  const handleEditTodo = (index, newValue) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newValue;
    setTodos(updatedTodos);
  };

  const todoList = useMemo(() => (
    todos.map((todo, index) => (
      <div className="todo-item" key={index}>
        <span>{todo}</span>
        <button className="todo-button delete" onClick={() => delTodo(index)}>Delete</button>
        <button className="todo-button edit" onClick={() => {
          const newTodo = prompt('Edit todo:', todo);
          if (newTodo !== null) {
            handleEditTodo(index, newTodo);
          }
        }}>Edit</button>
      </div>
    ))
  ), [todos, delTodo]);

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />
      <button className="todo-button add" onClick={addTodo}>Add Todo</button>
      <div>
        {todoList}
      </div>
    </div>
  );
};

export default TodoApp;
