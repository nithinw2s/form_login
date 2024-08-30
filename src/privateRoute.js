// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import tocken from './redux_slices/tocken';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  // Replace with your actual authentication logic
  return localStorage.getItem('authToken') === null;
};

const PrivateRoute = ({ children }) => {
  const token= useSelector((state)=>state.auth.user)
  console.log(token)
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
