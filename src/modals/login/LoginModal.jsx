import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import googleIcon from '../../../public/googleicon.svg';
import styles from '../styles/style.module.css';
import { useGoogleLogin } from '@react-oauth/google';
import crossIcon from '../../../public/crossIcon 2.svg';
import axios from 'axios';

const LoginModal = ({ show, onClose }) => {
  const loginwithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
        console.log(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        localStorage.setItem('isAuthenticated', 'true');
      } catch (err) {
        console.log(err);
      }
    },
  });

  // Handle body overflow and blur effect when modal is open
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
      document.getElementById('root').classList.add('blur-background'); // Assuming the content is in a div with id "root"
    } else {
      document.body.classList.remove('modal-open');
      document.getElementById('root').classList.remove('blur-background');
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.getElementById('root').classList.remove('blur-background');
    };
  }, [show]);

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
          <div className={styles.btnContinueGoogle} onClick={() => loginwithGoogle()}>
            <div>
              <img src={googleIcon} />
            </div>
            <h4>Continue with google</h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
