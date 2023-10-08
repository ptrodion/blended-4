import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(el => el.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todosReduser = todoSlice.reducer;
