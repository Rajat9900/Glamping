// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import styles from "./styles/style.module.css";
import logoImage from "../../../public/logoImage.png";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbarMainDiv}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logoImage} />
          </div>
          <div className={styles.navLinks}>
            <li>
              <Link to={"/"} className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} className={styles.navLink}>
                About us
              </Link>
            </li>
            <li>
              <Link to={"/"} className={styles.navLink}>
                Services
              </Link>
            </li>
            <li>
              <Link to={"/"} className={styles.navLink}>
                Contact us
              </Link>
            </li>
          </div>
          <button className={styles.bookNow}>Book Now</button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
