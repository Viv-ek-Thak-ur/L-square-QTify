import React, { useState, useRef } from "react";
import styles from "./albumSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Button, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AlbumSection({ title, data }) {
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);
  const theme = useTheme();

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggle}
          sx={{
            fontSize: "0.85rem",
            textTransform: "none",
           
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </div>

      <div className={styles.wrapper}>
        {!showAll && (
          <button className={styles.arrow} onClick={() => scroll("left")}>
            <ArrowBackIosNewIcon />
          </button>
        )}

        <div
          ref={scrollRef}
          className={showAll ? styles.cardGrid : styles.carousel}
        >
          {data.map((item) => (
            <AlbumCard
              key={item.id}
              title={item.title}
              follows={item.follows}
              backgroundImage={item.image}
            />
          ))}
        </div>

        {!showAll && (
          <button className={styles.arrow} onClick={() => scroll("right")}>
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default AlbumSection;
