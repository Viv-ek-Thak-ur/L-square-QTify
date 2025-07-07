import React, { useState } from "react";
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({ placeholder }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={styles.searchContainer}>
      <form
        className={`${styles.wrapper} ${isVisible ? styles.show : ""}`}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <input
          name="album"
          className={styles.search}
          placeholder={placeholder}
          required
        />
        <button className={styles.searchButton} onClick={toggleSearch} type="button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;