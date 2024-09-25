
import styles from "./styles/style.module.css";

import logoFooter from '../../../public/logoFoooter.svg'
import cropImage2 from "../../../public/cropImage2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerImageicon1 from "../../../public/footerImageicon1.png";
import footerImageicon2 from "../../../public/footerImageicon2.png";
import footerImageicon3 from "../../../public/footerImageicon3.png";

// import footerLogo from "../../../public/footerLogo.png";
const Footer = () => {
  return (
    <div className={styles.footerMainDiv}>
      {/* <div className={styles.footerSubDiv}> */}
      <div>
        <img src={cropImage2} style={{width: "100%"}}/>
      </div>
      <div className={styles.ContentFooter}>
        <div className={styles.leftSideContent}>
          <img src={logoFooter} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,.
          </p>
          <div>
            <FaFacebookF className={styles.iconBtn} />
            <FaLinkedinIn className={styles.iconBtn} />
            <FaInstagram className={styles.iconBtn} />
          </div>
        </div>
        <div className={styles.rightSideContent}>
          <div className={styles.upperFooter}>
            <div className={styles.contactInfo}>
              <img src={footerImageicon3} alt="" />
              <div>Phone</div>
              <p> +91 9779968093</p>
            </div>
            <div className={styles.contactInfo}>
              <img src={footerImageicon2} alt="" />
              <div>Email</div>
              <p>info@gmail.com</p>
            </div>
            <div className={styles.contactInfo}>
              <img src={footerImageicon1} alt="" />
              <div>Address</div>
              <p>Chandigarh sec21 Plot 54</p>
            </div>
          </div>
          <div className={styles.lowerFooter}>
            <div className={styles.navigation}>
              <p>Navigation</p>
              <div className={styles.navigationPara}>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Sontact us</p>
              </div>
            </div>
            <div className={styles.navigation}>
              <p>Quick Link</p>
              <div className={styles.navigationPara}>
                <p>Faq</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className={styles.navigation}>
              <p>Work Hours</p>
              <div className={styles.navigationPara}>
                <p>Mon-Fri: 7AM-5PM</p>
                <p>Saturday 9AM-3PM</p>
                <p>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.versionFooter}
        style={{ textAlign: "center", marginTop: "71px" }}
      >
        © 2024 Glamping Template • All Rights Reserved
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
