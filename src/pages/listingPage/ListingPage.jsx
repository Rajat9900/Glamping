
import Navbar from "../../components/navbar/Navbar";
import styles from "../../components/discovery/styles/style.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import star from "../../../public/star.png";
import discoverImage1 from "../../../public/discoveryImage1.png";
import discoverImage2 from "../../../public/discoveryImage2.png";
import discoverImage3 from "../../../public/discoveryImage3.png";
import Card from "react-bootstrap/Card";
import { GrLocation } from "react-icons/gr";
import Footer from "../../components/footer/Footer";
import filterPhoto from "../../../public/filterPhoto.png";
import trySearch1 from "../../../public/trysearch1.png";
import trySearch2 from "../../../public/trysearch2.png";
import trySearch3 from "../../../public/trysearch3.png";
import trySearch5 from "../../../public/trysearch5.png";
import trySearch6 from "../../../public/trysearch6.png";
import trySearch7 from "../../../public/trysearch7.png";
import trySearch8 from "../../../public/trysearch8.png";
import trySearch9 from "../../../public/trysearch9.png";
import trySearch10 from "../../../public/trysearch10.png";
import { useNavigate } from "react-router-dom";
const ListingPage = () => {
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
  const trySearchFor = [
    { image: trySearch1, Heading: "cabin" },
    { image: trySearch2, Heading: "Yurts" },
    { image: trySearch3, Heading: "Safari Tents" },
    { image: trySearch10, Heading: "Cottages" },

    { image: trySearch5, Heading: "Tiny Houses" },
    { image: trySearch6, Heading: "Caravans" },
    { image: trySearch7, Heading: "Domes" },
    { image: trySearch8, Heading: "Log Cabins" },
    { image: trySearch9, Heading: "Bell Tents" },
    // {image: trySearch10, Heading: "Tiny Houses"},
    // {image: trySearch3 , Heading: "Containers"},
    // {image: trySearch10 , Heading: "Tree Houses"},
    // {image: trySearch8 , Heading: "cabin"},
  ];

  const navigate = useNavigate();
  const goToListingDetail = () => {
    navigate("/listingdetailPage");
  };

  return (
    <>
      <div>
        <Navbar />
        {/* <div className={styles.trySearch}> */}
        <div className={styles.trySeachCard}>
          {trySearchFor.map((tryHouse) => {
            return (
              <>
                <div className={styles.particularHouse}>
                  <img src={tryHouse.image} />
                  <h4>{tryHouse.Heading}</h4>
                </div>
              </>
            );
          })}
          <button>
            <FaLongArrowAltRight />
          </button>
        </div>
        {/* </div> */}
        <div className={styles.discoverContentCard1}>
          <div className={styles.HeadingContent}>
            <div className={styles.HeadingDiscovery}>
              <div>Discovery Luxury Glamp Hub</div>
            </div>
            <div className={styles.btnDiscovery1}>
              <div>Filter</div>
              <img src={filterPhoto} />
            </div>
          </div>

          <div className={styles.CardCarouselContent}>
            {discoverContent.map((discoverCont) => {
              return (
                <>
                  <Card
                    className={styles.CardContentDiv1}
                    onClick={goToListingDetail}
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
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
