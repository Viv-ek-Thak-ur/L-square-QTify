import React from "react";
import styles from "./albumCard.module.css";

function AlbumCard({ title, follows, backgroundColor }) {
  return (
    <>
      <div className={styles.card} style={{ backgroundColor }}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.follows}>{follows} Follows</p>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
