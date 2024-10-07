import React, { useState } from 'react';
import styles from "./styles/style.module.css";
import discoverImage1 from "../../../public/discoveryImage1.png";
import discoverImage2 from "../../../public/discoveryImage2.png";
import discoverImage3 from "../../../public/discoveryImage3.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import bookcuttingBottom from "../../../public/bookcuttingBottom.png";

const campData = [
  {
    id: 1,
    title: 'Africa',
    location: '460 accommodations',
    imgUrl: discoverImage1,
  },
  {
    id: 2,
    title: 'Europe',
    location: '560 accommodations',
    imgUrl: discoverImage2,
  },
  {
    id: 3,
    title: 'Asia',
    location: '230 accommodations',
    imgUrl: discoverImage3,
  },
  {
    id: 4,
    title: 'North America',
    location: '560 accommodations',
    imgUrl: discoverImage1,
  },
  {
    id: 5,
    title: 'Africa',
    location: '460 accommodations',
    imgUrl: discoverImage2,
  },
  {
    id: 6,
    title: 'Asia',
    location: '230 accommodations',
    imgUrl: discoverImage3,
  },
  {
    id: 7,
    title: 'North America',
    location: '560 accommodations',
    imgUrl: discoverImage1,
  },
  {
    id: 8,
    title: 'Africa',
    location: '460 accommodations',
    imgUrl: discoverImage2,
  },
];

const CarouselHome1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4; // Number of cards to display

  const nextSlide = () => {
    // Prevent showing blank space at the end
    if (currentIndex < campData.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>  
      <div className={styles.discoveryHeroCutTop}>
          <img src={bookcuttingBottom} className={styles.bookcuttingBottom}/>
        </div>
      <div className={styles.controlsContainer}>
        <p className={styles.subtitle}>
        Locations on Glamping Hub
        </p>
        <div className={styles.arrowsContainer}>
          <button onClick={prevSlide} className={styles.prev}>
            <GoArrowLeft />
          </button>
          <button 
            onClick={nextSlide} 
            className={styles.next} 
            disabled={currentIndex === campData.length - visibleCards} // Disable when at the end
          >
            <GoArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselContent}
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {campData.map((camp) => (
              <div key={camp.id} className={styles.carouselItem4}>
                <img src={camp.imgUrl} alt={camp.title} className={styles.image} />
                <div className={styles.cardBody}>
                  <h3 className={styles.campTitle}>{camp.title}</h3>
                  <div className={styles.location}>
                    <p>{camp.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHome1;
