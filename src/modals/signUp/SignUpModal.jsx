import { useState } from "react";
import styles from "../styles/style.module.css";
import crossIcon from "../../../public/crossIcon 2.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpModal = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const { data } = await axios.put(`http://localhost:5000/api/users/${userInfo._id}`, formData);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      navigate("/mainhomepage");
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <>
      <div className={`fade ${styles.ModalMain}`}>
        <div>
          <img src={crossIcon} alt="Close" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
        </div>
        <h5>Finish signing up</h5>
        <hr />
        <div className={styles.modalBody}>
          <div className={styles.divLabelInput1}>
            <label htmlFor="FirstName">First name</label>
            <input
              type="text"
              id="FirstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
            />
          </div>
          <div className={styles.divLabelInput1}>
            <label htmlFor="LastName">Last name</label>
            <input
              type="text"
              id="LastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
            />
          </div>
          <div className={styles.divLabelInput1}>
            <label htmlFor="birthday">Date of birth</label>
            <input
              type="date"
              id="birthday"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.divLabelInput1}>
            <label htmlFor="Email">Contact info</label>
            <input
              type="email"
              id="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail"
            />
          </div>
          <div className={styles.lowerLogin}>
            <button className={styles.btnContinue} onClick={handleSubmit}>
              Agree and continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
