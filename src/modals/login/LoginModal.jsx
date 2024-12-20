import Modal from "react-bootstrap//Modal";
import googleIcon from "../../../public/googleicon.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/style.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import crossIcon from "../../../public/crossIcon 2.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ForgotPasswordModal from "../../modals/forgotPasswordModal/ForgotPasswordModal";

const LoginModal = ({ show, onClose, onLoginSuccess,onForgotPasswordClick }) => {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const googleRes = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        const { email, given_name, family_name } = googleRes.data;

        const backendRes = await axios.post(
          "http://localhost:5000/api/google-login",
          {
            email,
            firstName: given_name,
            lastName: family_name,
          }
        );

        console.log(backendRes, "backResab");
        if (backendRes.data.redirect === "mainHomepage") {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(backendRes.data.user)
          );
          localStorage.setItem("isAuthenticated", "true");
          navigate("/mainhomepage");
          onLoginSuccess(false);
          toast.success("Google login successful!");
        } else {
          alert(backendRes.data.message);
          localStorage.setItem(
            "userInfo",
            JSON.stringify(backendRes.data.user)
          );
          // navigate("/signupdetails");
          toast.error(backendRes.data.message);
          onLoginSuccess(true);
        }
      } catch (err) {
        toast.error("Google login failed. Please try again.");
        console.error("Error during Google login or user check:", err);
      }
    },
  });

  const onSubmit = async (data) => {
    const emailLoginRes = await axios.post(
      "http://localhost:5000/api/emailLogin",
      {
        email: data.email,
        password: data.password,
      }
    );
    console.log(emailLoginRes, "emailloginRes");
    if (emailLoginRes.data.redirect === "mainHomepage") {
      localStorage.setItem("userInfo", JSON.stringify(emailLoginRes.data.user));
      console.log(emailLoginRes,"emailLoginres")
      localStorage.setItem("isAuthenticated", "true");
      navigate("/mainhomepage");
      // onLoginSuccess(false);

      toast.success("Login successful!");
      console.log("Login successful, showing toast.", toast);
    } else {
      localStorage.setItem("userInfo", JSON.stringify(emailLoginRes.data.user));
      toast.error(emailLoginRes.data.message);
      // navigate("/signupdetails");
      onLoginSuccess(true);
    }
  };


  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        centered
      >
        <div className={styles.HeaderSection}>
          <div>
            <img
              src={crossIcon}
              onClick={onClose}
              style={{ cursor: "pointer" }}
            />
          </div>
          <h5>log in</h5>
        </div>
        <hr />
        <form className={styles.modalBody} onSubmit={handleSubmit(onSubmit)}>
          <h3>Welcome to Glamping</h3>
          <div className={styles.divLabelInput}>
            <label>Enter your Email</label>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: "EMail is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Does not match email format",
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>
          <div className={styles.divLabelInput}>
            <label>Enter your password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8 characters long",
                },
              })}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
          <div className={styles.divLabelInput2} >
        
            <label onClick={onForgotPasswordClick} style={{cursor:"pointer"}} >Forget Password?</label>
          </div>

          <div className={styles.lowerLogin}>
            <button className={styles.btnContinue} type="submit">
              Continue
            </button>
            <div className={styles.orContent}>
              <div></div>
              <p>Or</p>
              <div></div>
            </div>
            <div
              className={styles.btnContinueGoogle}
              onClick={() => loginWithGoogle()}
            >
              <div>
                <img src={googleIcon} />
              </div>
              <h4>Continue with Google</h4>
            </div>
          </div>
        </form>
      </Modal>
     
      {showForgotPasswordModal && (
        <ForgotPasswordModal
          show={showForgotPasswordModal}
          onClose={() => setShowForgotPasswordModal(false)}
        />
      )}

    </>
  );
};


export default LoginModal;
