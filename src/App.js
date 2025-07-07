import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Typography, Box } from "@mui/material";
import Hero from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import AlbumCard from './components/AlbumCard/AlbumCard';
import AlbumSection from './components/AlbumSection/AlbumSection';
import SongSection from './components/SongSection/SongSection';
import axios from "axios";





const theme = createTheme({
   typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette:{
    primary:{
      main:"#34C94B",
    },
    background:{
      default : "#121212",
    },
    text:{
      primary:"#FFFFFF"
    }
  }
})

function App(){
  const [topAlbums , setTopAlbums] = useState([]);
  const [newAlbums , setNewAlbums] = useState([]);
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

useEffect(()=>{
  async function fetchAlbums(){
    try{
      const [topRes, newRes] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
        ]);
        setTopAlbums(topRes.data);
        setNewAlbums(newRes.data);

    }catch(e){
       console.e("Failed to fetch Albums : Error")

    }
  }
  fetchAlbums();
},[])

  return(
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <BrowserRouter>
    <Navbar>
      <Logo/>
      <Search/>
    </Navbar>
    <Hero/>
    <AlbumSection title="Top Albums"
        data={topAlbums}
        isGrid={showAllTop}
        onShowAll={() => setShowAllTop(true)}
        />
    <AlbumSection 
        title="New Album" 
        data={newAlbums} 
        isGrid={showAllNew}
        onShowAll={() => setShowAllNew(true)}
        />
    {/* <SongSection songsData={topAlbums}/> */}
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App;