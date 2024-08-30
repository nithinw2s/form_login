// src/redux_slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState :{
    user: null,  // Initial state for the user data
  },
  reducers: {
    addToken: (state, action) => {
      state.user = action.payload;  // Save the user data from the payload
    },
  },
});

// Export the action to use it in components
export const { addToken } = authSlice.actions;

// Export the reducer to include it in the store
export default authSlice.reducer;
