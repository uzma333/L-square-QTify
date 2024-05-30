 import React , {useState,useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './App.css';
  import { Outlet } from "react-router-dom";
import {fetchTopAlbums,fetchNewAlbums,fetchSongs} from "./components/Api/Api";
// import Section from "./components/Section/Section";
// import Card from "./components/Card/Card";
// import Hero from "./components/Hero/Hero";



function App() {
  const [data,setData]=useState({});

  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState,[key]:data};
      });
    });
  };
  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
    // const response=async()=>{
    //   console.log(await fetchTopAlbums());
    //   console.log(await fetchNewAlbums());
    //   console.log(await fetchSongs());
    // }
    // response();
  },[])
 

  const {topAlbums=[],newAlbums=[],songs=[]}=data;
  return (
    
  <StyledEngineProvider injectFirst>
    <Navbar />
  
    
    

    
    
    
    
   
    
<Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
  </StyledEngineProvider>
      
   
  );
}

export default App;
