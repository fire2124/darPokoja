import React from "react";
import Carousel from "react-multi-carousel";
import { images } from "./items"
import { responsive } from "./carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselForm = () => {
  return (
    <Carousel
      containerClass="container"
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={false}
    >
      {images.map((item) => {
        return (
          <div className="picture-Carusel" key={item.key}>
            <img src={item.img} alt={item.alt} loading="lazy" key={item.key}/>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselForm;
