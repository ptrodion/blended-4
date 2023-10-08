import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  extraReducers: {
    [fetchTodos.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addTodo.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [deleteTodo.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const todosReduser = todoSlice.reducer;
