import "./Carousel.css";
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [imageHero, setImageHero] = useState(items[0].image);
  const [titleHero, setTitleHero] = useState(items[0].title);
  const [descriptionHero, setDescriptionHero] = useState(items[0].description);

  function handleSelectIndex(index) {
    setImageHero(items[index].image);
    setTitleHero(items[index].title);
    setDescriptionHero(items[index].description);
  }
  if (isMobile) {
    return (
      <div className="carousel-mobile-container">
        <div className="mobile-description center-sm">
          <h3 className="mobile-title">{titleHero}</h3>
          <p className="mobile-description">{descriptionHero}</p>
          <div ref={carouselRef} className="mobile-aling-carousel">
            {items.map((item, index) => {
              return (
                <div key={index} className="mobile-carousel-image">
                  <a onClick={() => handleSelectIndex(index)}>
                    <img
                      className="mobile-img-carousel"
                      src={item.image}
                      alt={item.title}
                    />
                    <p className="mobile-carousel-title-image">{item.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="carousel-container">
        <div className="carousel">
          <div className="image-hero">
            <img src={imageHero} className="img-hero" />
          </div>
          <div className="description">
            <div className="description-title">
              <h3 className="carousel-title">{titleHero}</h3>
              <p className="carousel-description">{descriptionHero}</p>
              <div ref={carouselRef} className="aling-carousel">
                {items.map((item, index) => {
                  return (
                    <div key={index} className="carousel-image">
                      <a onClick={() => handleSelectIndex(index)}>
                        <img
                          className="img-carousel"
                          src={item.image}
                          alt={item.title}
                        />
                        <p className="carousel-title-image">{item.title}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
};