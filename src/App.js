import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import PrivateRoute from './privateRoute';


// Lazy load the components
const Register = lazy(() => import('./pages/register'));
const Login = lazy(() => import('./pages/login'));
const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/nav/products'));
const Blog = lazy(() => import('./pages/nav/blog'));
const Pricing = lazy(() => import('./pages/nav/pricing'));

function App() {
  return (
    <BrowserRouter>
      {/* Suspense provides a fallback UI while the components are loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path='/products' element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path='/pricing' element={<PrivateRoute><Pricing /></PrivateRoute>} />
          <Route path='/blog' element={<PrivateRoute><Blog /></PrivateRoute>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
