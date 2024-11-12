import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "../styles/style.module.css";

const ResetPassword12 = () => {
  const { token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/reset-password/${token}`,
        {
          password: data.password,
        }
      );
      toast.success(res.data.message);
      navigate("/mainhomepage");
    } catch (err) {
      toast.error("Error resetting password.");
    }
  };

  return (
    <div className={styles.resetPassMainvdiv}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.resetPassform}>
        <h3>Reset Password</h3>
        <input
          type="password"
          placeholder="New password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword12;
