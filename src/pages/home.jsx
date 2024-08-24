import React from "react";
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from "../components/navbar";
import BasicTable from "../components/table";

function Home() {

  const location = useLocation();
  const { state } = location;
  const user = state?.user;

  console.log(user)

  if (!user) {
    return <div>No user data available.</div>;
  }

  return ( 
    <>
      <ResponsiveAppBar />
      <BasicTable userData={user} />
    </>
   );
}

export default Home;