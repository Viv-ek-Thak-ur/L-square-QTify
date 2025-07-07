import React, { useRef, useState, useEffect } from "react";
import styles from "./albumSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@mui/material";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

function AlbumSection({ title, data }) {
  const [showAll, setShowAll] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleToggle = () => setShowAll((prev) => !prev);

  useEffect(() => {
  if (
    swiperInstance &&
    swiperInstance.params &&
    prevRef.current &&
    nextRef.current
  ) {
   
    if (!swiperInstance.navigation) return;

    swiperInstance.params.navigation.prevEl = prevRef.current;
    swiperInstance.params.navigation.nextEl = nextRef.current;

    swiperInstance.navigation.destroy();   // reset first
    swiperInstance.navigation.init();      // reinitialize
    swiperInstance.navigation.update();    // refresh
  }
}, [swiperInstance]);
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Button
          variant="text"
          color="primary"
          onClick={handleToggle}
          sx={{
            textTransform: "none",
            fontWeight: "500",
            fontFamily: "Poppins",
          }}
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
        <div className={styles.carouselWrapper}>
          
          <img src={leftArrow} alt="left" ref={prevRef} className={styles.navArrow} />

          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            onSwiper={setSwiperInstance}
            breakpoints={{
              320: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              960: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
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

          <img src={rightArrow} alt="right" ref={nextRef} className={styles.navArrow} />
        </div>
      )}
    </div>
  );
}

export default AlbumSection;
