import "./Carousel.css";
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Carousel = ({ items }) => {
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
    <div className="carousel-mobile-container">
      <div className="mobile-description">
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

export default Carousel;

{
  /* <div className="carousel-body">
              <h2 className="carousel-title">{item.title}</h2>
              <p>{item.description}</p>
            </div> */
}
// import React, { useState } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// import './Carousel.css'; // Import the CSS file for styling

// const Carousel = ({ items }) => {
//   const [currentItem, setCurrentItem] = useState(0);

//   const handlePrev = () => {
//     setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
//   };

//   const handleNext = () => {
//     setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
//   };

//   return (
//     <Grid className="carousel-container">
//       <Row center="xs">
//         <Col xs={12} sm={10} md={8}>
//           <div className="carousel">
//             <div className="carousel-wrapper" style={{ transform: `translateX(-${currentItem * 100}%)` }}>
//               {items.map((item) => (
//                 <div key={item.id} className="carousel-item">
//                   <img src={item.imageSrc} alt={item.title} />
//                   <h2>{item.title}</h2>
//                   <p>{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Col>
//       </Row>
//       <div className="carousel-controls">
//         <button className="carousel-control" onClick={handlePrev}>
//           Prev
//         </button>
//         <button className="carousel-control" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </Grid>
//   );
// };

// export default Carousel;
