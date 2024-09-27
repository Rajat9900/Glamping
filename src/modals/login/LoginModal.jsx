
import { Modal } from 'react-bootstrap';
import googleIcon from '../../../public/googleicon.svg';
import styles from '../styles/style.module.css';
import { useGoogleLogin } from '@react-oauth/google';
import crossIcon from '../../../public/crossIcon 2.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, onClose }) => {
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const googleRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
  
        const { email, given_name, family_name } = googleRes.data; 

        const backendRes = await axios.post("http://localhost:5000/api/google-login", {
          email,
          firstName: given_name,
          lastName: family_name,
        });
  
        console.log(backendRes, "backResab");
        if (backendRes.data.redirect === 'mainHomepage') {
          localStorage.setItem("userInfo", JSON.stringify(backendRes.data.user));
          localStorage.setItem("isAuthenticated", "true");
          navigate("/mainhomepage");
        } else if (backendRes.data.redirect === 'signupdetails') {
          localStorage.setItem("userInfo", JSON.stringify(backendRes.data.user));
          navigate("/signupdetails");
        }
      } catch (err) {
        console.error('Error during Google login or user check:', err);
      }
    },
  });
  

  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      className={`fade ${styles.ModalMain}`}
    >
      <Modal.Header className={styles.HeaderSection}>
        <div>
          <img src={crossIcon} onClick={onClose} style={{ cursor: "pointer" }} />
        </div>
        <h5>Login or sign up</h5>
      </Modal.Header>
      <hr />
      <div className={styles.modalBody}>
        <h3>Welcome to Glamping</h3>
        <div className={styles.divLabelInput}>
          <label>Enter your phone number</label>
          <input type="number" placeholder="+91 97799-68093" />
          <p>
            We’ll call or text you to confirm your number. Standard message and data rates apply.
            <span style={{ color: "black", textDecoration: "underline" }}>Privacy Policy</span>
          </p>
        </div>
        <div className={styles.lowerLogin}>
          <button className={styles.btnContinue}>Continue</button>
          <div className={styles.orContent}>
            <div></div>
            <p>Or</p>
            <div></div>
          </div>
          <div className={styles.btnContinueGoogle} onClick={() => loginWithGoogle()}>
            <div>
              <img src={googleIcon} />
            </div>
            <h4 >Continue with Google</h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
