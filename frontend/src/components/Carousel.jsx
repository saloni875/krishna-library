import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../App.css"; // if you want to style it further

const ImageCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
        <div>
          <img src="/images/library1.jpg" alt="Library View 1" />
        </div>
        <div>
          <img src="/images/library2.jpg" alt="Library View 2" />
        </div>
        <div>
          <img src="/images/library3.jpg" alt="Library View 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
