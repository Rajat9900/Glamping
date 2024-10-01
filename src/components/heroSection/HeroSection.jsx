import Navbar from "../navbar/Navbar";
import styles from "./styles/style.module.css";
// import herosection from "../../../public/herosection.png";
import heroImage from '../../../public/heroImage.svg'
import bookcuttingBottom from "../../../public/bookcuttingBottom.png";
import cropImage1 from "../../../public/cropImage1.png";
// src/components/HeroSection.jsx
const HeroSection = () => {
  return ( 
    <>
      <div className={styles.hero}> 
        {/* <div className={styles.navbarAbsolute}> */}
        
        {/* </div> */}
        <img src={heroImage} className={styles.heroImage} />
        <Navbar />
        <div className={styles.content}>
          <div className="">
            Find Your Bliss
            <br />
            With Luxury Camping
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className={styles.imgCuttingBottom}>
        <img src={cropImage1} />
      </div>
      </div>
    </>
  );
};

export default HeroSection;
