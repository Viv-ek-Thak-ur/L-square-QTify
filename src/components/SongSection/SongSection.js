import React, { useState } from "react";
import styles from "./songsSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import LeftArrow from "../../assets/left.png";
import RightArrow from "../../assets/right.png";


const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

const Arrow = ({image}) => (
  <img src={image} alt="custom" />
);





function SongSection({ songsData }) {
  const [activeGenre, setActiveGenre] = useState("All");

  const filteredSongs =
    activeGenre === "All"
      ? songsData
      : songsData.filter((song) => song.genre === activeGenre);

  const scrollLeft = () => {
    document.getElementById("songScroll").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("songScroll").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.songSection}>

      <div className={styles.tabs}>
        {genres.map((genre) => (
          <button
            key={genre}
            className={
              activeGenre === genre ? styles.activeTab : styles.inactiveTab
            }
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className={styles.scrollWrapper}>
        <button className={styles.arrow} onClick={scrollLeft}>
          <Arrow image={LeftArrow}/>
        </button>
        <div className={styles.cardContainer} id="songScroll">
          {songsData.map((song) => (
            <AlbumCard 
              title={song.title}
              follows={song.follows}
              backgroundColor={song.image}/>
          ))}
        </div>
        <button className={styles.arrow} onClick={scrollRight}>
          <Arrow image={RightArrow} />
        </button>
      </div>
    </div>
  );
}

export default SongSection;
