import React from 'react'
import styles from './styles/style.module.css'
import  Navbar  from '../../components/navbar/Navbar'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import paymentPic1 from '../../../public/paymentPic1.svg'
const ReviewOrder = () => {
    const navigate = useNavigate()
    const navigateToPayment  = () =>{
     navigate('/paymentDetails')
    }
  return (
    <div>
      <Navbar/>
      <div className={styles.thirdDivContentBottom1}>
        <div className={styles.LeftDivContent1}>
         <h3 className={styles.headingthree}>Your Trip</h3>
         <div className={styles.divContfirst}>
            <div className={styles.firstDivCont}>
              <h4>Pick up: <span>2 PM</span></h4>
              <h3>28 Nov'22</h3>
              <h4>Monday</h4>
            </div>
            {/* <div className={styles.secondDivCont}>
          <hr/>
            <h3>1 day</h3>
           <hr/>
            </div> */}
            <div className={styles.orContent}>
            <div></div>
            <p>1 Day</p>
            <div></div>
          </div>
            <div className={styles.thirdDivCont}>
            <div className={styles.firstDivCont}>
              <h4>Drop off: <span>2 PM</span></h4>
              <h3>29 Nov'22</h3>
              <h4>Tuesday</h4>
            </div>
            </div>
         </div><hr/>
         <div>
           <h3 className={styles.bookingFor}>I am booking for</h3> 
       <div className={styles.thirdDivCont1}>
        <div className={styles.checkboxDiv}>
            <input type='checkbox'/>
        <label>Myself</label>
        </div>
        <div className={styles.checkboxDiv}>
            <input type='checkbox'/>
        <label>Someone Else</label>
        </div>
        </div>
         </div>
    <div className={styles.thirdDivCont2}>
    <div className={styles.inputContent}>
    <h4>Name</h4>  
        <div className={styles.NameFull}>
          <h3>Mr.</h3>
           <input type='text' placeholder='Full Name'/>
        </div>
    </div>
    <div className={styles.inputContent}> 
    <h4>Name</h4>  
        <div className={styles.NameFull}>
        
           <input type='text' placeholder='Full Name'/>
        </div>
    </div>
    </div>
   <div className={styles.lastDivContent}>
    <h4>Number of Guests</h4>
    <div className={styles.lastDivContentsub}>
        <div> - </div>
        <p>1</p>
        <div> + </div>
    </div>
   </div>

        </div>

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
        
      </div>
     <div className={styles.btnOrderPage}> <button className={styles.btnOrderPage1} onClick={navigateToPayment}>Confirm and Pay <span><MdKeyboardArrowRight/></span></button></div> 
    </div>
  )
}

export default ReviewOrder
