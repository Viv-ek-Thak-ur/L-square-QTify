import React from "react";
import styles from "./albumSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";

function AlbumSection({ title, data }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.showAll}>Show All</button>
        </div>

        <div className={styles.cardGrid}>
          {data.map((item) => (
            <AlbumCard
              key={item.id}
              title={item.title}
              follows={item.follows}
              backgroundColor={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AlbumSection;
