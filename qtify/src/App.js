import React from "react";
import Navbar from "./components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './App.css';
import Hero from "./components/Hero/Hero";
// import { Outlet } from "react-router-dom";

function App() {

  // const {topAlbums=[],newAlbums=[],songs=[]}=data;
  return (
    
  <StyledEngineProvider injectFirst>
    <Navbar />
    <Hero/>
{/* <Outlet context={{data:{topAlbums,newAlbums,songs}}}/> */}
  </StyledEngineProvider>
      
   
  );
}

export default App;
