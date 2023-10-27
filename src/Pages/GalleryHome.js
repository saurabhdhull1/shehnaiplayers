import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
} from "./export";

const GalleryHome = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    { src: g1, alt: "Image 1", title: "Shehnai Player 1" },
    { src: g2, alt: "Image 2", title: "Shehnai Player 2" },
    { src: g3, alt: "Image 3", title: "Shehnai Player 3" },
    { src: g4, alt: "Image 4", title: "Shehnai Player 4" },
    { src: g5, alt: "Image 5", title: "Shehnai Player 5" },
    { src: g6, alt: "Image 6", title: "Shehnai Player 6" },
    { src: g7, alt: "Image 7", title: "Shehnai Player 7" },
    { src: g8, alt: "Image 8", title: "Shehnai Player 8" },
    { src: g9, alt: "Image 9", title: "Shehnai Player 9" },
    { src: g10, alt: "Image 10", title: "Shehnai Player 10" },
    { src: g11, alt: "Image 11", title: "Shehnai Player 11" },
    { src: g12, alt: "Image 12", title: "Shehnai Player 12" },
    { src: g13, alt: "Image 13", title: "Shehnai Player 13" },
    { src: g14, alt: "Image 14", title: "Shehnai Player 14" },
    { src: g15, alt: "Image 15", title: "Shehnai Player 15" },
    { src: g16, alt: "Image 16", title: "Shehnai Player 16" },
    { src: g17, alt: "Image 17", title: "Shehnai Player 17" },
    { src: g18, alt: "Image 18", title: "Shehnai Player 18" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Gallery</h2>
              <p>
                Explore our exquisite collection of Shehnai images. Each image
                captures the beauty and <br /> craftsmanship of this traditional
                musical instrument.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="owl-carousel owl-theme skill-slider"
              >
                {images.map((image, index) => (
                  <div className="item" key={`galleryHome${index}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{ borderRadius: "14px" }}
                    />
                    <h5>{image.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;
