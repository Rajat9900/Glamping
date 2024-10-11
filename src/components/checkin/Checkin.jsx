import styles from "./styles/style.module.css";
import { useState } from "react";
import humanIcon from '../../../public/humanIcon.svg'
import calenderIcon from '../../../public/calenderIcon.svg'
import locationIcon from '../../../public/locationIcon.svg'
import trySearch1 from "../../../public/trysearch1.png";
import trySearch2 from "../../../public/trysearch2.png";
import trySearch3 from "../../../public/trysearch3.png";
import trySearch5 from "../../../public/trysearch5.png";
import trySearch6 from "../../../public/trysearch6.png";
import trySearch7 from "../../../public/trysearch7.png";
import trySearch8 from "../../../public/trysearch8.png";
import trySearch9 from "../../../public/trysearch9.png";
import trySearch10 from "../../../public/trysearch10.png";
import CarouselHome1 from "../carouselHome1/Carousel";

const Checkin = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const trySearchFor = [
    {id: 1, image: trySearch1, Heading: "cabin" },
    {id: 2, image: trySearch2, Heading: "Tented Cabins" },
    {id: 3, image: trySearch3, Heading: "Safari Tents" },
    {id: 4, image: trySearch10, Heading: "Tiny Houses" },

    {id: 5, image: trySearch5, Heading: "Caravans" },
    {id: 6, image: trySearch6, Heading: "Domes" },
    {id: 7, image: trySearch7, Heading: "Log Cabins" },
    {id: 8, image: trySearch8, Heading: "Yurts" },
    {id: 9, image: trySearch9, Heading: "Bell Tents" },
    {id: 10, image: trySearch10, Heading: "Tiny Houses" },
    {id: 11, image: trySearch3, Heading: "Containers" },
    {id: 12, image: trySearch10, Heading: "Tree Houses" },
    // {image: trySearch8 , Heading: "cabin"},
  ];
  const handleSelect = (id) => {
    setSelectedItem(id); // Set the clicked item's ID as the selected one
  };
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formItem}>
          <div>Check-in</div>
          <p>
            <img src={calenderIcon} />
            Where
          </p>
        </div>{" "}
        <hr />
        <div className={styles.formItem}>
          <div>Check-out</div>
          <p>
            {" "}
            <img src={calenderIcon} />
            Where
          </p>
        </div>
        <hr />
        <div className={styles.formItem}>
          <div>Guest</div>
          <p>
            {" "}
            <img src={humanIcon} />
            Who's coming?
          </p>
        </div>
        <hr />
        <div className={styles.formItem}>
          <div>Accommodation</div>
          <p>
            <img src={locationIcon} />
            Select?
          </p>
        </div>
        <hr />
        <button className={styles.checkAvailability}>Check Availability</button>
      </div>
      <CarouselHome1 />
      <div className={styles.trySearch}>
        <div className={styles.trySearchHeading}>
          <h2>Try Search For</h2>
          <p>
            Explore Distinctive Selections with Our Thoughtfully Curated
            Categories
          </p>
        </div>
        <div className={styles.trySeachCard}>
          {trySearchFor.map((tryHouse) => (
            <div
              key={tryHouse.id}
              className={`${styles.particularHouse} ${selectedItem === tryHouse.id ? styles.active : ""}`} // Apply 'active' class if selected
              onClick={() => handleSelect(tryHouse.id)} 
            >
              <img src={tryHouse.image} alt={tryHouse.Heading} />
              <h4>{tryHouse.Heading}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkin;
