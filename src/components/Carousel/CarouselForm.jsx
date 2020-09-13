import React from "react";
import Carousel from "react-multi-carousel";
import ilustracia from "../../images/export/GOPR1199.jpg";
import ilustracia2 from "../../images/export/GOPR1201.jpg";
import ilustracia3 from "../../images/export/GOPR1254.jpg";
import ilustracia4 from "../../images/export/GOPR1268.jpg";
import ilustracia5 from "../../images/export/GOPR1276.jpg";
import ilustracia6 from "../../images/export/GOPR1285.jpg";
import ilustracia7 from "../../images/export/IMG_8293.jpg";
import ilustracia8 from "../../images/export/IMG_8299.jpg";
import ilustracia9 from "../../images/export/IMG_8306.jpg";
import ilustracia10 from "../../images/export/IMG_8312.jpg";
import ilustracia11 from "../../images/export/IMG_8313.jpg";
import ilustracia12 from "../../images/export/IMG_8317.jpg";
import ilustracia13 from "../../images/export/IMG_8319.jpg";
import ilustracia14 from "../../images/export/IMG_8320.jpg";
import ilustracia15 from "../../images/export/IMG_8325.jpg";
import ilustracia16 from "../../images/export/IMG_8331.jpg";
import ilustracia17 from "../../images/export/IMG_8332.jpg";
import ilustracia18 from "../../images/export/IMG_8333.jpg";
import ilustracia19 from "../../images/export/IMG_8341.jpg";
import ilustracia20 from "../../images/export/IMG_8345.jpg";
import ilustracia22 from "../../images/export/IMG_8357.jpg";
import ilustracia23 from "../../images/export/IMG_8381.jpg";
import ilustracia24 from "../../images/export/IMG_8383.jpg";

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
      className="justify-center"
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
      minimumTouchDrag={80}
      slidesToSlide={1}
    >
      <div className="picture-Carusel">
        <img src={ilustracia} alt="image1" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia2} alt="image2" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia4} alt="image3" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia3} alt="image4" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia5} alt="image5" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia6} alt="image6" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia7} alt="image7" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia8} alt="image8" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia9} alt="image9" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia10} alt="image10" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia11} alt="image11" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia12} alt="image12" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia13} alt="image13" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia14} alt="image14" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia15} alt="image15" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia16} alt="image16" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia17} alt="image17" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia18} alt="image18" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia19} alt="image19" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia20} alt="image20" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia22} alt="image22" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia23} alt="image23" loading="lazy"></img>
      </div>
      <div className="picture-Carusel">
        <img src={ilustracia24} alt="image24" loading="lazy"></img>
      </div>
    </Carousel>
  );
};

export default CarouselForm;
