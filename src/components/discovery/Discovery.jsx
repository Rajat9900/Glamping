import bookcuttingBottom from "../../../public/bookcuttingBottom.png";
import bookcuttingTop from "../../../public/bookcuttingTop.png";
import bookImage from "../../../public/bookImage.png";
import accomdImage from "../../../public/accomdImage.png";
import styles from "./styles/style.module.css";
import star from "../../../public/star.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import discoverImage1 from "../../../public/discoveryImage1.png";
import discoverImage2 from "../../../public/discoveryImage2.png";
import discoverImage3 from "../../../public/discoveryImage3.png";
import amentyIcon1 from "../../../public/amentyIcon1.png";
import amentyIcon2 from "../../../public/amentyIcon2.png";
import amentyIcon3 from "../../../public/amentyIcon3.png";
import amentyIcon4 from "../../../public/amentyIcon4.png";
import amentyIcon5 from "../../../public/amentyIcon5.png";
import amentyIcon6 from "../../../public/amentyIcon6.png";
import { useNavigate } from "react-router-dom";
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
  const discoverContent = [
    {
      img: discoverImage1,
      rating: 4.3,
      star1: star,
      head: "Ankoret Lac Camp & Party, Da Lat, Vietnam",
      para: "Mall Road Shimla Hignway",
      rupees: "$100",
      perNight: "/night",
      location: <GrLocation />,
    },
    {
      img: discoverImage2,
      rating: 4.1,
      star1: star,
      head: "Ankoret Lac Camp & Party, Da Lat, Vietnam",
      para: "Mall Road Shimla Hignway",
      rupees: "$100",
      perNight: "/night",
      location: <GrLocation />,
    },
    {
      img: discoverImage3,
      rating: 4.7,
      star1: star,
      head: "Ankoret Lac Camp & Party, Da Lat, Vietnam",
      para: "Mall Road Shimla Hignway",
      rupees: "$100",
      perNight: "/night",
      location: <GrLocation />,
    },
  ];
  const naviagte = useNavigate();
  const navigateToListingPage = () => {
    naviagte("/listingPage");
  };
  return (
    <>
      <div className={styles.discoveryHeroSection}>
        <div className={styles.discoveryHeroCutTop}>
          <img src={bookcuttingBottom} />
        </div>
        <div className={styles.discoveryHeroImageCont}>
          <img src={bookImage} className={styles.bookImageStyle} />
          <div className={styles.bookImagesCont}>
            <h1>Where The Great Outdoors And Modern Luxury Converge</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button>Book now</button>
          </div>
        </div>
        <div className={styles.discoveryHeroCutbottom}>
          <img src={bookcuttingTop} />
        </div>
      </div>
      <div className={styles.discoverContentCard}>
        <div className={styles.HeadingContent}>
          <div className={styles.HeadingDiscovery}>
            <div>Discovery Luxury Glamp Hub</div>
            <p>Explore Luxe Camping Near You with Glamp Hub</p>
          </div>
          <div className={styles.btnDiscovery}>
            <button>
              <FaLongArrowAltLeft />
            </button>

            <button>
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        <div className={styles.CardCarouselContent}>
          {discoverContent.map((discoverCont) => {
            return (
              <>
                <Card
                  className={styles.CardContentDiv}
                  onClick={navigateToListingPage}
                >
                  <Card.Img
                    variant="top"
                    src={discoverCont.img}
                    className={styles.ImgCarousel}
                  />
                  <p className={styles.startRatiingdiv}>
                    {discoverCont.rating}
                    <span>
                      <img src={discoverCont.star1} />
                    </span>
                  </p>
                  <div className={styles.cardContent}>
                    <div>{discoverCont.head}</div>
                    <p>
                      <GrLocation /> {discoverCont.para}
                    </p>
                    <h4>
                      {discoverCont.rupees}
                      <span>{discoverCont.perNight}</span>
                    </h4>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.accomdImageDiv1}>
        <div className={styles.accomdImageDiv2}>
          <img src={accomdImage} alt="" />
          <div className={styles.absoluteDivAccomd}>
            <div>List your accommodation on Glamp Hub, join Us Now!</div>
            <p>Explore Luxe Camping Near You with Glamp Hub</p>
            <button>Book now</button>
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
                <Card className={styles.CardContentDiv1}>
                  <Card.Img variant="top" src={discoverCont.image} />
                  <div className={styles.cardContent1}>
                    <div>{discoverCont.head}</div>
                    <p>{discoverCont.para}</p>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Discovery;
