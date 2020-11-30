import React from "react";
import Carousel from "react-multi-carousel";
import ilustracia from "../../images/export/altanok_1.jpg";
import ilustracia2 from "../../images/export/dnu_1.jpg";
import ilustracia3 from "../../images/export/dnu_2.jpg";
import ilustracia4 from "../../images/export/jedalen.jpg";
import ilustracia5 from "../../images/export/jedalen_2.jpg";
import ilustracia6 from "../../images/export/chodba.jpg";
import ilustracia7 from "../../images/export/kuchyna_1.jpg";
import ilustracia8 from "../../images/export/opatrovatelky.jpg";
import ilustracia9 from "../../images/export/opatrovatelky_1.jpg";
import ilustracia10 from "../../images/export/opatrovatelky_2.jpg";
import ilustracia11 from "../../images/export/pracovna.jpg";
import ilustracia12 from "../../images/export/schody.jpg";
import ilustracia13 from "../../images/export/schody_2.jpg";
import ilustracia14 from "../../images/export/spolocenska_1.jpg";
import ilustracia15 from "../../images/export/spolocenska_2.jpg";
import ilustracia16 from "../../images/export/spolocenska_3.jpg";
import ilustracia17 from "../../images/export/vonku_0.jpg";
import ilustracia18 from "../../images/export/vonku_1.jpg";
import ilustracia19 from "../../images/export/vonku_2.jpg";
import ilustracia20 from "../../images/export/vonku_3.jpg";
import ilustracia21 from "../../images/export/vonku_4.jpg";
import ilustracia22 from "../../images/export/vonku_5.jpg";
import ilustracia23 from "../../images/export/vonku_6.jpg";
import ilustracia24 from "../../images/export/vonku.jpg";
import ilustracia25 from "../../images/export/wc.jpg";
import ilustracia26 from "../../images/export/wc_2.jpg";

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

const images = [
  {
    img: ilustracia,
    alt: "image1",
  },
  {
    img: ilustracia2,
    alt: "image2",
  },
  {
    img: ilustracia3,
    alt: "image3",
  },
  {
    img: ilustracia4,
    alt: "image4",
  },
  {
    img: ilustracia5,
    alt: "image5",
  },
  {
    img: ilustracia6,
    alt: "image6",
  },
  {
    img: ilustracia7,
    alt: "image7",
  },
  {
    img: ilustracia8,
    alt: "image8",
  },
  {
    img: ilustracia9,
    alt: "image9",
  },
  {
    img: ilustracia10,
    alt: "image10",
  },
  {
    img: ilustracia11,
    alt: "image11",
  },
  {
    img: ilustracia12,
    alt: "image12",
  },
  {
    img: ilustracia13,
    alt: "image13",
  },
  {
    img: ilustracia14,
    alt: "image14",
  },
  {
    img: ilustracia15,
    alt: "image15",
  },
  {
    img: ilustracia16,
    alt: "image16",
  },
  {
    img: ilustracia17,
    alt: "image17",
  },
  {
    img: ilustracia18,
    alt: "image18",
  },
  {
    img: ilustracia19,
    alt: "image19",
  },
  {
    img: ilustracia20,
    alt: "image20",
  },
  {
    img: ilustracia21,
    alt: "image21",
  },
  {
    img: ilustracia22,
    alt: "image22",
  },
  {
    img: ilustracia23,
    alt: "image23",
  },
  {
    img: ilustracia24,
    alt: "image24",
  },
  {
    img: ilustracia25,
    alt: "image25",
  },
  {
    img: ilustracia26,
    alt: "image26",
  }
]

const CarouselForm = () => {
  return (
    <Carousel
      // className="justify-center"
      // swipeable={false}
      // responsive={responsive}
      // centerMode={false}
      // autoPlay
      // autoPlaySpeed={3000}
      // additionalTransfrom={0}
      // arrows
       containerClass="container"
      // draggable
      // focusOnSelect={true}
      // minimumTouchDrag={80}
      // slidesToSlide={1}

      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={false}
    >
      {images.map(( item ) => {
        return (
          <div className="picture-Carusel">
            <img src={item.img} alt={item.alt} loading="lazy" className="p"></img>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselForm;
