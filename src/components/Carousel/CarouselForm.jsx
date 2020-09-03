import React from "react";
import Carousel from "react-multi-carousel";
import ilustracia from "../../images/DarPokoja/gallery/images/DSCF1331z.JPG";
import ilustracia2 from "../../images/DarPokoja/gallery/images/DSCF1346z.JPG";
import ilustracia3 from "../../images/DarPokoja/gallery/images/DSCF1351z.JPG";
import ilustracia4 from "../../images/DarPokoja/gallery/images/DSCF1357z.JPG";
import ilustracia5 from "../../images/DarPokoja/gallery/images/DSCF1359z.JPG";
import ilustracia6 from "../../images/DarPokoja/gallery/images/DSCF1362z.JPG";
import ilustracia7 from "../../images/DarPokoja/gallery/images/DSCF1364z.JPG";
import ilustracia8 from "../../images/DarPokoja/gallery/images/DSCF1367z.JPG";
import ilustracia9 from "../../images/DarPokoja/gallery/images/DSCF1372z.JPG";
import ilustracia10 from "../../images/DarPokoja/gallery/images/DSCF1373z.JPG";
import ilustracia11 from "../../images/DarPokoja/gallery/images/DSCF1375z.JPG";
import ilustracia12 from "../../images/DarPokoja/gallery/images/DSCF1376z.JPG";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 630 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 630, min: 0 },
    items: 1,
  },
};

const CarouselForm = () => {
  return (
    <Carousel
      className=""
      swipeable={false}
      responsive={responsive}
      centerMode={false}
      autoPlay
      autoPlaySpeed={3000}
      additionalTransfrom={0}
      arrows
      containerClass="container"
      draggable
      focusOnSelect={true}
      infinite
      minimumTouchDrag={80}
      slidesToSlide={1}
    >
      <div className="picture-Carusel">
        <img src={ilustracia} alt="image8"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia2} alt="image2"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia4} alt="image8"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia3} alt="image4"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia5} alt="image5"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia6} alt="image6"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia7} alt="image7"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia8} alt="image8"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia9} alt="image8"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia10} alt="image8"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia11} alt="image8"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia12} alt="image8"></img>
      </div>
    </Carousel>
  );
};

export default CarouselForm;
