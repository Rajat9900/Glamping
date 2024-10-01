
import  Navbar  from '../../components/navbar/Navbar'
import { MdArrowBackIos } from "react-icons/md";
import styles from './styles/style.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import tickPic1 from '../../../public/tickPic1.svg'
import paymentPic1 from '../../../public/paymentPic1.svg'
import dollarPick2 from '../../../public/dollarPick2.svg'
import cryptoImg from '../../../public/cryptoImg.svg'
import MasterCardpic from '../../../public/MasterCardpic.svg'
import AmericanExpresspic from '../../../public/AmericanExpresspic.svg'
const PaymentMethod = () => {
    const payments = [
        {img:  dollarPick2, heading: "Cash Payment" , imgCheck: tickPic1},
        {img: cryptoImg, heading: "Crypto" , imgCheck: tickPic1},
        {img:  MasterCardpic, heading: "Master Card" , imgCheck: tickPic1},
        {img:  AmericanExpresspic, heading: "American Express" , imgCheck: tickPic1},
    ]
  return (
    <div>
  <Navbar/>
  <div className={styles.upperhead}>
  <div className={styles.upperFirstHead}>
    <h3><span>Home /</span><span> Building & Community /</span> <span> Tour Details / </span><span> Review Booking /</span> payment Methods</h3>
  </div>
  <div className={styles.upperSecondHead}>
    <h3><span><MdArrowBackIos/></span>Payment Methods</h3>
  </div>
  </div>
  <div className={styles.thirdDivContentBottom1}>
    <div className={styles.leftDiv}>
    <div className={styles.LeftDivContent1}>
   <div className={styles.mainfirstCont}> 
   
    {
        payments.map((payment)=>{
return(
    <>
    <div className={styles.firstLeftDiv}> 
    <div className={styles.leftSubCont}>
     <img src={payment.img}/>
     <h3>{payment.heading}</h3>
    </div>
    <div className={styles.imgTickPick}>
    <img src={payment.imgCheck}/>
    </div>
    </div>
    </>
)
        })
    }
 

</div>   
<div className={styles.secondLeftContSub}>
<h3>ADD NEW CARD +</h3>
<div className={styles.cardName}>
    <label>NAME ON CARD</label>
    <input type='text' placeholder='Mr.John Doe'/>
</div>
<div className={styles.cardInfoCont}>
<div className={styles.cardInfoSubCont}>
 <label>CARD NUMBER</label>  
 <input type='email' placeholder='example@gmail.com'/> 
</div>
<div className={styles.cardInfoSubCont}>
<label>EXPIRY</label>  
 <input type='number' placeholder='06/24'/> 
</div>
<div className={styles.cardInfoSubCont}>
<label>CVV</label>  
 <input type='password' /> 
</div>
</div>
</div>

    </div>
    <div className={styles.btnCont}>
        <button>Cancel</button>
        <button className={styles.secondBtn}>Update</button>
    </div>
    </div>
   
    <div className={styles.ImgRightContent3}>
    <div className={styles.ImgRightContent1}>
      <div className={styles.divMainContentSub}>
        <div className={styles.firstRightDiv}>
            <h3>Emirates Crown Tower Dubai</h3>
            <h4>33, Palm Avenue, Dubai</h4>
        </div>
        <div>
            <img src={paymentPic1}/>
        </div>
        </div><hr/>
       <div className={styles.divMainContentSub}>
        <div>
        <h3>1 Room, 1 Night</h3>
        <h4>Monday</h4>
        </div>
        <div>500 AED</div>
       
       </div><hr/>
       <div className={styles.divMainContentSub}>
        <h5>Total Discount</h5>
        <h5>-5 AED</h5>
        </div><hr/>
       <div className={styles.divMainContentSub}>
        <h4>VAT</h4>
        <h4>2 AED</h4>
        </div><hr/>
       <div className={styles.divMainContentSub}>
        <h3>Total Payable Amount</h3>
        <h3>500 AED</h3>
       </div>


        </div>
        <div className={styles.btnOrderPage}> <button className={styles.btnOrderPage1} >Confirm and Pay <span><MdKeyboardArrowRight/></span></button></div> 
        </div>
  </div>
    </div>
  )
}

export default PaymentMethod;
