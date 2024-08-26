import React from "react";
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from "../components/navbar";
import BasicTable from "../components/table";
import { useDispatch } from 'react-redux';
import { increment, decrement } from "../features/exampleSlice";

function Home() {

  const location = useLocation();
  const { state } = location;
  const user = state?.user;
  const dispatch = useDispatch();
  

  console.log("user:",user)

  // if (!user) {
  //   return <div>No user data available.</div>;
  // }

  return ( 
    <>
      <ResponsiveAppBar />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {console.log("home page")}
      <BasicTable userData={user} />
    </>
   );
}

export default Home;