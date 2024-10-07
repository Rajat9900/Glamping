
import  Navbar  from '../navbar/Navbar'
import Footer from '../footer/Footer'
import styles from '../paymentSucces/styles/style.module.css'
import paymentFailIcon from '../../../public/paymentFailIcon.svg'
import { MdArrowForwardIos } from "react-icons/md";
const PaymentCancel = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.upperhead}>
      <div className={styles.upperFirstHead}>
    <h3><span>Home /</span><span> Building & Community /</span> <span> Tour Details / </span><span> Review Booking /</span> payment Methods</h3>
  </div>
  <div className={styles.divContent}>
     <img src={paymentFailIcon}/>
     <h3>Payment Failed!</h3>
<p>We regret to inform you that your  payment attempt was unsuccessful.</p>
<button>Try again<spn><MdArrowForwardIos/></spn></button>
  </div>
  </div>
      <Footer/>
    </div>
  )
}

export default PaymentCancel
