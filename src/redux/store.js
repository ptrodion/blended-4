import { configureStore } from '@reduxjs/toolkit';
import { todosReduser } from './todoSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    todos: todosReduser,
    filter: filterReducer,
  },
});
