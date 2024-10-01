// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/style.module.css";
import logoHeader from '../../../public/logoHeader.svg'
import { useState } from "react";
import LoginModal from "../../modals/login/LoginModal";
import SignUpModal from "../../modals/signUp/SignUpModal";
const Navbar = () => {
  // const[show, setShow] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // const handleClose = () =>{
  //   setShow(false)
  // }

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };
// const navigate = useNavigate()
const handleLoginSuccess = (showSignupDetail) => {
  setShowLogin(false); 
  if (showSignupDetail) {
    setShowSignUp(true); 
  
  }
  console.log( typeof showSignupDetail  , "showSignupDetail")
};


  
  return (
    <>
   
      <div className={styles.navbarMainDiv}>
      {/* {show && 
         <LoginModal 
         show={show} 
         onClose={handleClose} 
         onSuccess={handleLoginSuccess} 
         />} */}
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
          <button className={styles.bookNow} style={{position:"relative"}}   onClick={() => setShowLogin(true)}>Book Now</button>
          
        </nav>
      </div>
      
      {showLogin && (
        <LoginModal
          show={showLogin}
          onClose={handleLoginClose}
          onLoginSuccess={handleLoginSuccess} 
        />
      )}

      {showSignUp && (
        <SignUpModal
          show={showSignUp}
          onClose={handleSignUpClose}
        />
      )}
    </>
  );
};

export default Navbar;
