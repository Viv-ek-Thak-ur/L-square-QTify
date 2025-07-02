import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./navbar.module.css";
import { useTheme } from "@mui/material/styles";

function Navbar({ searchData }) {
  const theme = useTheme();
  return (
    <nav className={styles.navbar} style={{ backgroundColor: theme.palette.primary.main }}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button sx={{ backgroundColor : "#121212"}}>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;