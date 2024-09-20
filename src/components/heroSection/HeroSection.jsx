import Navbar from "../navbar/Navbar";
import styles from "./styles/style.module.css";
import herosection from "../../../public/herosection.png";
import bookcuttingBottom from '../../../public/bookcuttingBottom.png'
// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <>
      <div className={styles.hero}>
       
        {/* <div className={styles.navbarAbsolute}> */}
          <Navbar />
          {/* </div> */}
          <img src={herosection} className={styles.heroImage} />
          <div className={styles.content}>
            <div className="">Find Your Bliss
            With Luxury Camping</div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            
          </div> 
          {/* <img className={styles.imgBottom} src={bookcuttingBottom}/> */}
        
      </div>
    </>
  );
};

export default HeroSection;
