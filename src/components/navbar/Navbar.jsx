// src/components/Navbar.jsx
import { Link} from "react-router-dom";
import styles from "./styles/style.module.css";
import logoHeader from '../../../public/logoHeader.svg';
import { useState } from "react";
import LoginModal from "../../modals/login/LoginModal";
import SignUpModal from "../../modals/signupmodal/SignUpModal";
import OtherSignUpModal from '../../modals/othersignUp/OtherSignUpModal';
import ForgotPasswordModal from "../../modals/forgotPasswordModal/ForgotPasswordModal"; // Import ForgotPasswordModal

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignUp] = useState(false);
  const [showSignupOther, setShowSignupOther] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false); // New state for ForgotPasswordModal

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleSignupClose = () => {
    setShowSignUp(false);
    setShowSignupOther(true);
  };

  const handleSignUpClose = () => {
    setShowSignupOther(false);
  };

  const handleLoginSuccess = (showSignupDetail) => {
    setShowLogin(false);
    if (showSignupDetail) {
      setShowSignUp(true);
    }
  };

  const handleSwitchToLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true); 
    setShowLogin(false); 
  };

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
          <button
            className={styles.bookNow}
            style={{ position: "relative" }}
            onClick={() => setShowSignUp(true)}
          >
            Book Now
          </button>
        </nav>
      </div>

      {showLogin && (
        <LoginModal
          show={showLogin}
          onClose={handleLoginClose}
          onLoginSuccess={handleLoginSuccess}
          onForgotPasswordClick={handleForgotPasswordClick} // Pass forgot password handler
        />
      )}

      {showSignup && (
        <SignUpModal
          show={showSignup}
          onClose={handleSignupClose}
          onSignUpSuccess={handleSignupClose}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}

      {showSignupOther && (
        <OtherSignUpModal show={showSignupOther} onClose={handleSignUpClose} />
      )}

      {/* ForgotPasswordModal */}
      {showForgotPasswordModal && (
        <ForgotPasswordModal
          show={showForgotPasswordModal}
          onClose={() => setShowForgotPasswordModal(false)}
        />
      )}
    </>
  );
};

export default Navbar;
