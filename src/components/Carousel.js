import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { s1, s2, s3, s4, s5 } from "../Pages/export";
import main from "../assets/img/main.jpg"

const CarouselComponent = () => {
  let img = [main, s1, s2, s4, s5];
  return (
    <Carousel autoPlay interval={2000} infiniteLoop>
      {img.map((item, index) => (
        <div>
          <img alt="" src={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
