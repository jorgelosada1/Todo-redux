// src/Components/TodoDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todos/todosSlice';
import '../sass/TodoDetails.scss';

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function TodoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return <div>No se encontró la tarea</div>;
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id)); // Dispatch deleteTodo action to delete todo
  };

  return (
    <div className="todo-details">
      <h1>Todo Details</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Created at: {formatDate(todo.createdAt)}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/">Back to Todo List</Link>
    </div>
  );
}

export default TodoDetails;
