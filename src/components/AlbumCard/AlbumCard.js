import React from "react";
import styles from "./albumCard.module.css";
import Chip from "@mui/material/Chip";

function AlbumCard({ title, follows, backgroundImage}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={backgroundImage} alt={title} className={styles.image} />
        <div className={styles.bottom}>
          <Chip
            label={`${follows} Follows`}
            className={styles.chip}
            sx={{
              backgroundColor: "black",
              color: "white",
              fontSize: "0.7rem",
              height: "24px",
            }}
          />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default AlbumCard;
