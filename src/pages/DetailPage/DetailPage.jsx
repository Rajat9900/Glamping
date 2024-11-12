import Navbar from "../../components/navbar/Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./styles/style.module.css";
import sainiPhoto from "../../../public/sainiPhoto.png";
import detailImage1 from "../../../public/detailmage1.png";
import detailImage2 from "../../../public/detailmage2.png";
import detailImage3 from "../../../public/detailmage3.png";
import detailImage4 from "../../../public/detailmage4.png";
import detailImage5 from "../../../public/detailmage5.png";
import likeIcon from "../../../public/likeIcon.png";
import bedIcon from "../../../public/bedIcon.png";
import groupIcon from "../../../public/groupIcon.png";
import calenderIcon from "../../../public/calenderIcon.png";
import homeIcon from "../../../public/homeIcon.png";
import waterIcon from "../../../public/waterIcon.png";
import lockIcon from "../../../public/lockIcon.png";
import balconyIcon from "../../../public/balconyIcon.png";
import chairIcon from "../../../public/chairIcon.png";
import dropOffIcon from "../../../public/dropOffIcon.png";
import dryerIcon from "../../../public/dryerIcon.png";
import kitchenIcon from "../../../public/kitchenIcon.png";
import petIcon from "../../../public/petIcon.png";
import washingIcon from "../../../public/washingIcon.png";
import shareIcon from "../../../public/shareIcon.png";
import locationPhoto from '../../../public/locationPhoto.svg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
const DetailPage = () => {
  const placeItems = [
    { img: lockIcon, header: "Lock on bedroom door" },
    { img: chairIcon, header: "High chair" },
    { img: petIcon, header: "Pets allowed" },
    { img: kitchenIcon, header: "Kitchen" },
    { img: dryerIcon, header: "Dryer" },
    { img: washingIcon, header: "Washing machine" },
    { img: dropOffIcon, header: "Luggage drop-off allowed" },
    { img: balconyIcon, header: "Patio or balcony" },
  ];
const naviagate = useNavigate()
  const navigateToReviewOrder = () =>{
naviagate('/reviewOrderPage')
  }
  return (
    <div>
      <Navbar />
      <div className={styles.mainGridDiv}>
        <div className={styles.HeadingContent}>
          <div className={styles.HeadingDiscovery}>
            <div>Ankoret Lac Camp & Party, Da Lat, Vietnam</div>
          </div>
          <div className={styles.btnDiscovery2}>
            <div className={styles.btnCoverDiv}>
              <img src={shareIcon} />
              <h4>Share</h4>
            </div>
            <div className={styles.btnCoverDiv}>
              <img src={likeIcon} />
              <h4>Save</h4>
            </div>
          </div>
        </div>
        <div className={styles.photoGrid}>
          <div className={`${styles.gridItem} ${styles.largeItem}`}>
            <img src={detailImage1} alt="Photo 1" />
          </div>
          <div className={styles.gridItem}>
            <img src={detailImage2} alt="Photo 2" />
          </div>
          <div className={styles.gridItem}>
            <img src={detailImage3} alt="Photo 3" />
          </div>
          <div className={styles.gridItem}>
            <img src={detailImage4} alt="Photo 4" />
          </div>
          <div className={styles.gridItem}>
            <img src={detailImage5} alt="Photo 5" />
          </div>
          <div className={` ${styles.showAll}`}>
            <button>
              {" "}
              <img src={groupIcon} />
              Show all photos
            </button>
          </div>
        </div>
      </div>
      <div className={styles.thirdDivContentBottom}>
        <div className={styles.LeftDivContent}>
          <div className={styles.firstDivCont}>
            <div className={styles.contntfirstDiv}>
              <div>Domes in Shimla, Mal Road</div>
              <p>1 double bed · Shared bathroom</p>
            </div>
            <div className={styles.contactInfo}>
              <img src={sainiPhoto} alt="" />
              <div>Stay with shubham Saini</div>
              <p> Superhost · 7 years hosting</p>
            </div>
          </div>
          <div className={styles.SecondDivCont}>
            <div className={styles.contactInfo1}>
              <img src={bedIcon} alt="" />
              <div>Room in a rental unit</div>
              <p>Your own room in a home, plus access to shared spaces.</p>
            </div>
            <div className={styles.contactInfo1}>
              <img src={homeIcon} alt="" />
              <div>Shared common spaces</div>
              <p>You’ll share parts of the home with the Host.</p>
            </div>
            <div className={styles.contactInfo1}>
              <img src={waterIcon} alt="" />
              <div>Shared bathroom</div>
              <p>You’ll share the bathroom with others.</p>
            </div>
            <div className={styles.contactInfo1}>
              <img src={calenderIcon} alt="" />
              <div>Free cancellation for 48 hours</div>
              <p>Get a full refund if you change your mind.</p>
            </div>
          </div>
          <div className={styles.thirdDivCont}>
            <h3>About this place</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              deleniti cumque et accusamus adipisci minima, impedit maiores
              aperiam sed beatae asperiores tempora similique <br />
              assumenda, corporis molestias dolorum aliquid vel. Quos!
            </p>
            <Link to="" className={styles.linkDivThird}>
              Show more <MdKeyboardArrowRight />
            </Link>
          </div>
          <div className={styles.forthDivCont}>
            <div>
              <h3>Where you'll sleep</h3>
            </div>
            <di className={styles.forthDivCard}>
              <img src={bedIcon} />
              <h4>Bedroom</h4>
              <p>1 double bed</p>
            </di>
          </div>
          <div className={styles.fifthDivCont}>
            <div>
              <h3>What this place offers</h3>
            </div>
            <div className={styles.FifthContDiv2}>
              {placeItems.map((placeItem) => {
                return (
                  <>
                    <div className={styles.contFiftParticular}>
                      <img src={placeItem.img} />
                      <p>{placeItem.header}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={styles.firthdivBtn}>
              <img src={groupIcon} />
              Show all amenities
            </div>
          </div>
          <div>
            <h3>View on map</h3>
            
          <div className="ratio ratio-16x9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109348.20372523597!2d77.00312378933073!3d31.078272679921525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1729748867590!5m2!1sen!2sin" width="600" height="250"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
<div><span><img src={locationPhoto}/></span>84746 O'Connell Station, Abu Dhabi Emirate, Al Dhafrah Region
            </div>

          </div>
         
        </div>

        <div className={styles.ImgRightContent}>
          <h3>₹5,252 night</h3>
          <div className={styles.mainDivLower}>
            <div className={styles.upperDiv}>
              <div className={styles.upperDiv1}>
                <h4>CHECK-IN</h4>
                <h5>11/17/2024</h5>
              </div>
              <div className={styles.upperDiv2}>
                <h4>CHECK-IN</h4>
                <h5>11/17/2024</h5>
              </div>
            </div>
            <div className={styles.lowerDiv}>
              <div>
                {" "}
                <h4>GUEST</h4>
                <h5>1Guest</h5>
              </div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
          <button onClick={navigateToReviewOrder}>Reserve</button>
          <p>You won't be charged yet</p>
          <div className={styles.calculatingDiv}>
            <div>
              <h5>₹5,252 x 5 nights</h5>
              <h5>₹26,260</h5>
            </div>
            <div>
              <h5>Cleaning fee</h5>
              <h5>₹745</h5>
            </div>
            <div>
              <h5>GST Tax</h5>
              <h5>₹4,429</h5>
            </div>
          </div>
          <div className={styles.lastDivRightCont}>
            <h6>Total before taxes</h6>
            <h6>₹31,434</h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
