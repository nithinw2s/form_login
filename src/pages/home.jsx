import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from "../components/navbar";
import BasicTable from "../components/table";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux_slices/productslice'


function Home() {

  const location = useLocation();
  const { state } = location;
  const user = state?.user;
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  return ( 
    <>
      <ResponsiveAppBar />
      <BasicTable  />
    </>
   );
}

export default Home;