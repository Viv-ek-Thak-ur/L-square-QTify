import React, { useState } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./albumSection.module.css";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function AlbumSection({ title, data }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <Button
          variant="text"
          color="primary"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <AlbumCard
              key={item.id}
              title={item.title}
              follows={item.follows}
              backgroundImage={item.image}
            />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          
          breakpoints={{
            320: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            960: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          style={{ padding: "0 40px" }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <AlbumCard
                title={item.title}
                follows={item.follows}
                backgroundImage={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default AlbumSection;