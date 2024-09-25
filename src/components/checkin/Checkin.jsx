import styles from "./styles/style.module.css";
import humanIcon from '../../../public/humanIcon.svg'
import calenderIcon from '../../../public/calenderIcon.svg'
import locationIcon from '../../../public/locationIcon.svg'
import cropImage1 from "../../../public/cropImage1.png";
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
  const trySearchFor = [
    { image: trySearch1, Heading: "cabin" },
    { image: trySearch2, Heading: "Tented Cabins" },
    { image: trySearch3, Heading: "Safari Tents" },
    { image: trySearch10, Heading: "Tiny Houses" },

    { image: trySearch5, Heading: "Caravans" },
    { image: trySearch6, Heading: "Domes" },
    { image: trySearch7, Heading: "Log Cabins" },
    { image: trySearch8, Heading: "Yurts" },
    { image: trySearch9, Heading: "Bell Tents" },
    { image: trySearch10, Heading: "Tiny Houses" },
    { image: trySearch3, Heading: "Containers" },
    { image: trySearch10, Heading: "Tree Houses" },
    // {image: trySearch8 , Heading: "cabin"},
  ];
  return (
    <>
      <div className={styles.imgCuttingBottom}>
        <img src={cropImage1} />
      </div>
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
          {trySearchFor.map((tryHouse) => {
            return (
              <>
                <div className={styles.particularHouse}>
                  <img src={tryHouse.image} />
                  <h4>{tryHouse.Heading}</h4>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Checkin;
