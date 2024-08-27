// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your slices or reducers here
import productReducer from './redux_slices/productslice';

const store = configureStore({
  reducer: {
    products:productReducer,
  },
});

export default store;
