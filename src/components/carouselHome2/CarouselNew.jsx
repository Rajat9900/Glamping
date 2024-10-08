import React, { useState, useEffect }  from 'react';
import styles from "./styles/style.module.css";
import discoverImage1 from "../../../public/discoveryImage1.png";
import discoverImage2 from "../../../public/discoveryImage2.png";
import discoverImage3 from "../../../public/discoveryImage3.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi"; 
import { useNavigate } from 'react-router-dom';

const campData = [
  {
    id: 1,
    title: 'Ankoret Lac Camp & Party, Da Lat, Vietnam',
    location: 'Mall Road Shimla Highway',
    rupees: "$100",
    perNight: "/night",
    rating: 4.3,
    imgUrl: discoverImage1,
  },
  {
    id: 2,
    title: 'Ankoret Lac Camp & Party, Da Lat, Vietnam',
    location: 'Mall Road Shimla Highway',
    rupees: "$100",
    perNight: "/night",
    rating: 4.3,
    imgUrl: discoverImage2,
  },
  {
    id: 3,
    title: 'Ankoret Lac Camp & Party, Da Lat, Vietnam',
    location: 'Mall Road Shimla Highway',
    rupees: "$100",
    perNight: "/night",
    rating: 4.3,
    imgUrl: discoverImage3,
  },
  {
    id: 4,
    title: 'Ankoret Lac Camp & Party, Da Lat, Vietnam',
    location: 'Mall Road Shimla Highway',
    rupees: "$100",
    perNight: "/night",
    rating: 4.3,
    imgUrl: discoverImage1,
  },
  {
    id: 5,
    title: 'Ankoret Lac Camp & Party, Da Lat, Vietnam',
    location: 'Mall Road Shimla Highway',
    rupees: "$100",
    perNight: "/night",
    rating: 4.3,
    imgUrl: discoverImage2,
  },
];

const CarouselHome2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const updateVisibleCards = () => {
    if (window.innerWidth <= 600) {
      setVisibleCards(1); 
    } else if (window.innerWidth <= 900) {
      setVisibleCards(2); 
    } else {
      setVisibleCards(3); 
    }
  };
  useEffect(() => {
    updateVisibleCards(); 
    window.addEventListener('resize', updateVisibleCards); 
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (currentIndex < campData.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const navigate = useNavigate()
const naviagtetolistingPage =() =>{
navigate('/listingPage')
}


  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Discovery Luxury Glamp Hub</h2>
      
      <div className={styles.controlsContainer}>
        <p className={styles.subtitle}>
          Explore Luxe Camping Near You with Glamp Hub
        </p>
        <div className={styles.arrowsContainer}>
          <button onClick={prevSlide} className={styles.prev}>
            <GoArrowLeft />
          </button>
          <button 
            onClick={nextSlide} 
            className={styles.next} 
            disabled={currentIndex === campData.length - visibleCards} 
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
              <div key={camp.id} className={styles.carouselItem}>
                <img src={camp.imgUrl} alt={camp.title} className={styles.image} />
                <div className={styles.cardBody} onClick={naviagtetolistingPage}>
                  <div className={styles.rating}>
                    <span>{camp.rating}</span>
                    <AiFillStar className={styles.starIcon} />
                  </div>
                  <h3 className={styles.campTitle}>{camp.title}</h3>
                  <div className={styles.location}>
                    <HiOutlineLocationMarker className={styles.locationIcon} />
                    <p>{camp.location}</p>
                  </div>
                  <p className={styles.price}>
                    <span style={{fontWeight: "600", color: "#333D29",fontSize: "19px", fontFamily: "'Inter', sans-serif" }}>{camp.rupees}</span>
                    <span style={{fontWeight: "400", color: "#333D29",fontSize: "12px"}}>{camp.perNight}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHome2;
