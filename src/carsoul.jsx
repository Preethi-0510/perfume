
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const carouselSlides = [
  {
    type: "video",
    src: "https://v.ftcdn.net/11/54/83/91/700_F_1154839121_DRiJJKcN3bGly54zb2uDY23NT5xJss6q_ST.mp4", // Direct video file
    captionTitle: "Exquisite Fragrances",
    captionText: "Discover a collection crafted with precision and passion.",
  },
  {
    type: "video",
    src: "https://v.ftcdn.net/10/58/39/88/240_F_1058398897_2lX34mBvqtAjCS2KgKwew3YNnI1Kw3k6_ST.mp4",
    captionTitle: "Floral Elegance",
    captionText: "Embrace the delicate notes of our signature floral scents.",
  },
  {
    type: "video",
    src: "https://v.ftcdn.net/14/31/40/10/240_F_1431401082_E0CfKt8PYVmEqpW5k5IifYVKiBMwiRsd_ST.mp4",
    captionTitle: "Timeless Allure",
    captionText: "Experience sophisticated aromas that leave a lasting impression.",
  },
];

function ProductShowcaseCarousel() {
  return (
    <section id="home">
      <Carousel data-bs-theme="dark">
        {carouselSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            {slide.type === "image" ? (
              <img className="d-block w-100" src={slide.src} alt={slide.captionTitle} />
            ) : (
              <video
                className="d-block w-100"
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            <Carousel.Caption>
              <h3>{slide.captionTitle}</h3>
              <p>{slide.captionText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default ProductShowcaseCarousel;