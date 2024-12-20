import bookcuttingBottom from "../../../public/bookcuttingBottom.png";
import bookcuttingTop from "../../../public/bookcuttingTop.png";
import bookImage from "../../../public/bookImage.png";
import accomdImage from "../../../public/accomdImage.png";
import styles from "./styles/style.module.css";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import amentyIcon1 from "../../../public/amentyIcon1.png";
import amentyIcon2 from "../../../public/amentyIcon2.png";
import amentyIcon3 from "../../../public/amentyIcon3.png";
import amentyIcon4 from "../../../public/amentyIcon4.png";
import amentyIcon5 from "../../../public/amentyIcon5.png";
import amentyIcon6 from "../../../public/amentyIcon6.png";
import CarouselHome2 from '../carouselHome2/CarouselNew'
import SignUpModal from "../../modals/othersignUp/OtherSignUpModal";
import LoginModal from "../../modals/login/LoginModal";
// import { Carousel } from "react-responsive-carousel";
const Discovery = () => {
  const amentyContent = [
    {
      image: amentyIcon1,
      head: "Enhanced Comfort",
      para: "Revel in a heightened level of comfort during your Glamping escapade.",
    },
    {
      image: amentyIcon2,
      head: "Breathtaking Views",
      para: "Immerse yourself in the awe-inspiring vistas that surround your Glamping retreat.",
    },
    {
      image: amentyIcon3,
      head: "Glamping Pros",
      para: "Discover the advantages & expertise that Glamping professionals bring to your journey.",
    },
    {
      image: amentyIcon4,
      head: "Variety of Tent Options",
      para: "Spacious family tents to intimate, there  a perfect shelter for every adventurer.",
    },
    {
      image: amentyIcon5,
      head: "Delicious Dining",
      para: "Delight your palate with delectable dining options curated specifically for your experience.",
    },
    {
      image: amentyIcon6,
      head: "Nature's Serenity",
      para: "Welcoming peace and soothing sounds for ultimate relaxation and inner peace.",
    },
  ];

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };
// const navigate = useNavigate()
const handleLoginSuccess = (showSignupDetail) => {
  setShowLogin(false); 
  if (showSignupDetail) {
    setShowSignUp(true); 
  
  }}
  return (
    <>
      <div className={styles.discoveryHeroSection}>
        <div className={styles.discoveryHeroCutTop}>
          <img src={bookcuttingBottom} style={{width:"100%"}}/>
        </div>
        <div className={styles.discoveryHeroImageCont}>
          <img src={bookImage} className={styles.bookImageStyle} />
          <div className={styles.bookImagesCont}>
            <h1>Where The Great Outdoors And Modern Luxury Converge</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button  onClick={() => {
              console.log("clicked here");
              setShowLogin(true)

            }}>Book now</button>
          </div>
        </div>
        <div className={styles.discoveryHeroCutbottom}>
          <img src={bookcuttingTop} style={{width:"100%"}}/>
        </div>
      </div>
      <div className={styles.discoverContentCard}>
       <CarouselHome2/>

      </div>
      <div className={styles.accomdImageDiv1}>
        <div className={styles.accomdImageDiv2}>
          <img src={accomdImage} alt="" />
          <div className={styles.absoluteDivAccomd}>
            <div>List your accommodation on Glamp Hub, join Us Now!</div>
            <p>Explore Luxe Camping Near You with Glamp Hub</p>
            <button onClick={() => setShowLogin(true)}>Book nows</button>
          </div>
        </div>
      </div>
      <div className={styles.discoverContentCard}>
        <div className={styles.HeadingDiscovery1}>
          <div>Best Glamping With Amenities</div>
          <p>Explore Luxe Camping Near You with Glamp Hub</p>
        </div>

        <div className={styles.CardCarouselContent1}>
          {amentyContent.map((discoverCont) => {
            return (
              <>
                <div className={styles.CardContentDiv3}>
                  <div className={styles.CardContentDiv3img}>
                  <Card.Img variant="top" src={discoverCont.image} />
                  </div>
                  <div className={styles.cardContent3}>
                    <div>{discoverCont.head}</div>
                    <p>{discoverCont.para}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {showLogin && (
        <LoginModal
          show={showLogin}
          onClose={handleLoginClose}
          onLoginSuccess={handleLoginSuccess} 
        />
      )}

      {showSignUp && (
        <SignUpModal
          show={showSignUp}
          onClose={handleSignUpClose}
        />
      )}
    </>
  );
};

export default Discovery;
