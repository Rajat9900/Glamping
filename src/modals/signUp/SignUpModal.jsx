import React from 'react'
import { useEffect } from 'react';
import styles from '../styles/style.module.css'
import { Modal } from 'react-bootstrap';
import crossIcon from '../../../public/crossIcon 2.svg';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ show, onClose }) => {
  const navigate = useNavigate()
 const navToMainPage =() =>{
navigate('mainhomepage')
 }

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
        <h5>Finish signing up</h5>
      </Modal.Header>
      <hr />
      <div className={styles.modalBody}>
        
        <div className={styles.divLabelInput1}>
          <label htmlFor="FirstName">First name</label>
          <input type="text" id="FirstName" name="firstName" placeholder="John" />
          <p>
            We’ll call or text you to confirm your number. Standard message and data rates apply.
           
          </p>
        </div>
        <div className={styles.divLabelInput1}>
          <label htmlFor="LastName">Last name</label>
          <input type="text" id="LastName" name="lastName" placeholder="John" />
          <p>
          Make sure this matches the name on your government ID. If you go by another name, you can add a
            <span style={{ color: "black", textDecoration: "underline" }}>preferred first name.</span>
          </p>
        </div>
        <div className={styles.divLabelInput1}>
          <label htmlFor="birthday">Date of birth</label>
          <input type="date" id="birthday" name="birthday" placeholder="Date of birth" />
          <p>
          To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Glamping.
            
          </p>
        </div>
        <div className={styles.divLabelInput1}>
          <label htmlFor="Email">Contact info</label>
          <input type="email" id="Email" name="email" placeholder="E-mail" />
          <p>
          We'll email you trip confirmations and receipts.
           
          </p>
        </div>
      <p>By selecting Agree and continue, I agree to Glamping’s<span> Terms of service, Payment Terms of service,</span> and acknowledge the<span> Privacy policy.</span></p>
        <div className={styles.lowerLogin}>
          <button className={styles.btnContinue} onClick={navToMainPage}>Agree and continue</button>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal
