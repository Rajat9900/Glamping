// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/style.module.css";
import logoHeader from '../../../public/logoHeader.svg'
import { useState } from "react";
import LoginModal from "../../modals/login/LoginModal";
import SignUpModal from "../../modals/signUp/SignUpModal";
const Navbar = () => {
  const[show, setShow] = useState(false)
  const handleClose = () =>{
    setShow(false)
  }
  
  return (
    <>
      <div className={styles.navbarMainDiv}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logoHeader} />
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
          <button className={styles.bookNow} onClick={() => setShow(true)}>Book Now</button>
          
        </nav>
      </div>
      {/* {show && 
         <LoginModal 
         show={show} 
         onClose={handleClose} />} */}
      {show && 
         <SignUpModal 
         show={show} 
         onClose={handleClose} />}
    </>
  );
};

export default Navbar;
