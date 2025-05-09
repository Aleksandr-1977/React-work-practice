import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  task: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: true },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  filters: {
    status: 'all',
  },
};
const rootReducer = (state = initialState, action) => {
  return state;
};
export const store = configureStore({ reducer: rootReducer });
