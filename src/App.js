import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Typography, Box } from "@mui/material";
import Hero from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import AlbumCard from './components/AlbumCard/AlbumCard';
import AlbumSection from './components/AlbumSection/AlbumSection';
import topAlbum from '../src/data/album.json'
import newAlbum from '../src/data/songs.json'

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
    {/* <AlbumSection title="Top Album" data={topAlbum}/> */}
    {/* <AlbumSection title="New Album" data={newAlbum}/> */}
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App;