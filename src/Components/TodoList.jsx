// src/Components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTodos } from '../features/todos/todosSlice';
import '../sass/TodoList.scss';

function TodoList() {
  const todos = useSelector(selectTodos);

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <Link className="add-todo-link" to="/new">Add New Todo</Link>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <Link className="todo-link" to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
