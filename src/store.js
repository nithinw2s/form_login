// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your slices or reducers here
import productReducer from './redux_slices/productslice';
import cardProductReduce from './redux_slices/cardPdtSlice'

const store = configureStore({
  reducer: {
    products:productReducer,
    cardproducts:cardProductReduce,

  },
});

export default store;
