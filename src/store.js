// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your slices or reducers here
import exampleReducer from './features/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
