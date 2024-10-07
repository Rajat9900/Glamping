import React from 'react'
import  Navbar  from '../navbar/Navbar'
import Footer from '../footer/Footer'
import styles from './styles/style.module.css'
import paymentSuccessIcon from '../../../public/paymentSuccessIcon.svg'
import { MdArrowForwardIos } from "react-icons/md";
const PaymentSuccess = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.upperhead}>
      <div className={styles.upperFirstHead}>
    <h3><span>Home /</span><span> Building & Community /</span> <span> Tour Details / </span><span> Review Booking /</span> payment Methods</h3>
  </div>
  <div className={styles.divContent}>
     <img src={paymentSuccessIcon}/>
     <h3>Payment Successful!</h3>
<p>Thank you for your payment. Your transaction has been successfully processed.</p>
<button>View my bookings<spn><MdArrowForwardIos/></spn></button>
  </div>
  </div>
      <Footer/>
    </div>
  )
}

export default PaymentSuccess
