// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './Components/TodoList';
import TodoDetails from './Components/TodoDetails';
import NewTodo from './Components/NewTodo';
import './sass/App.scss'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app"> 
          <h1>Todo App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new">New Todo</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={<TodoList />}
            />
            <Route
              path="/new"
              element={<NewTodo />}
            />
            <Route
              path="/todo/:id"
              element={<TodoDetails />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
