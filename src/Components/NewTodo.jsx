// src/Components/NewTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import '../sass/NewTodo.scss';

function NewTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const newTodo = {
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    dispatch(addTodo(newTodo)); // Dispatch addTodo action to add new todo
    setTitle('');
    setDescription('');
  };

  return (
    <div className="new-todo">
      <h1 className="new-todo__title">Add New Todo</h1>
      <form onSubmit={handleAddTodo} className="new-todo__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="new-todo__input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="new-todo__textarea"
        />
        <button type="submit" className="new-todo__button">Add Todo</button>
      </form>
    </div>
  );
}

export default NewTodo;
