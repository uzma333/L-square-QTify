import React from "react";
import Navbar from "./components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './App.css';


function App() {
  return (
    
  <StyledEngineProvider injectFirst>
    <Navbar />
  </StyledEngineProvider>
      
   
  );
}

export default App;
