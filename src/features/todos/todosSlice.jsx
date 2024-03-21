// src/features/todos/todosSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    resetTodos: () => [],
  },
});

export const { addTodo, toggleTodoStatus, deleteTodo, resetTodos } = todosSlice.actions;

export const selectTodos = state => state.todos;

export default todosSlice.reducer;
