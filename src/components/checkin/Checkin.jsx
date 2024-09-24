import styles from "./styles/style.module.css";
import humanIcon from '../../../public/humanIcon.svg'
import calenderIcon from '../../../public/calenderIcon.svg'
import locationIcon from '../../../public/locationIcon.svg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { FaLongArrowAltRight } from "react-icons/fa";
import locationHead1 from "../../../public/locationHead1.png";
import locationHead2 from "../../../public/locationHead2.png";
import locationHead3 from "../../../public/locationHead3.png";
import locationHead4 from "../../../public/locationHead4.png";
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
// import cropImage2 from '../../../public/cropImage2.png'

const Checkin = () => {
  const locationHeadData = [
    { img: locationHead1, head: "Africa", para: "460 accommodations" },
    { img: locationHead2, head: "Europe", para: "560 accommodations" },
    { img: locationHead3, head: "Asia", para: "260 accommodations" },
    { img: locationHead4, head: "North America", para: "560 accommodations" },
  ];
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
      <div className={styles.LocationDiv}>
        <div className={styles.HeadingLocation}>
          <h1>locations on Glamping Hub</h1>
          <div className={styles.buttonLocation}>
            <button>
              <IoIosArrowRoundBack style={{fontSize:"30px"}}/>
            </button>
            <button>
              <IoIosArrowRoundForward style={{fontSize:"30px"}}/>
            </button>
          </div>
        </div>

        <div className={styles.locationsCard}>
          {locationHeadData.map((location) => {
            return (
              <>
                <div>
                  <img src={location.img} alt="" />
                  <h4>{location.head}</h4>
                  <p>{location.para}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
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
