import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import styles from '../styles/style.module.css'
import crossIcon from "../../../public/crossIcon 2.svg";

const ForgotPasswordModal = ({ show, onClose }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    // const navigate =  useNavigate()
    const onSubmit = async (data) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/forgot-password",
          { email: data.email }
         
        );
       
        toast.success(res.data.message);
        // navigate(`/reset-password/${res.data.token}`); 
        console.log(res.data , "res of forget-password") 
      } catch (err) {
        toast.error(err, "Error sending reset email.");
      }
    };
  
    return (
      <Modal show={show} onHide={onClose} centered>
        <div className={styles.HeaderSection}>
        <div>
          <img
            src={crossIcon}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h5>forget Password</h5>
      </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.modalBody}>
      <div className={styles.divLabelInput}>
      <label>Enter your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          </div> 
          {errors.email && <p>{errors.email.message}</p>}
          <button className={styles.btnContinue} type="submit">Send Reset Link</button>
        
        </form>
      </Modal>
    );
  };
  export default ForgotPasswordModal;