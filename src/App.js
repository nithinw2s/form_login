import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/nav/products';
import Blog from './pages/nav/blog';
import Pricing from './pages/nav/pricing';
import Table from './components/table2';

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Register /> }/>
    <Route path='/login' element={<Login /> }/>
    <Route path='/home' element={<Home /> }/>
    <Route path='/products' element={<Products />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/blog' element={<Blog />} /> 
    <Route path='/table' element={<Table />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
