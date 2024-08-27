import React, { useEffect } from "react";
import ResponsiveAppBar from "../components/navbar";
import BasicTable from "../components/table";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux_slices/productslice'


function Home() {

  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch])

  return ( 
    <>
      <ResponsiveAppBar />
      <BasicTable  />
    </>
   );
}

export default Home;