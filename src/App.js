import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Register /> }/>
    <Route path='/login' element={<Login /> }/>
    <Route path='/home' element={<Home /> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
