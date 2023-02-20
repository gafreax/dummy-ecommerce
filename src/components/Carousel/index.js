import React, { useState } from "react";

function Carousel({ images, onClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const generateImages = () => {
    return images.map((image, index) => {
      const className = `carousel-item ${index ===  currentIndex ? 'active': ''}`;
      return <div key={image} className={className}>
        <img src={image} className="d-block w-100" alt={image} />
      </div>
    });
  }

  return (
    <div
      className="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" onClick={() => onClick()}>
        {generateImages()}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span onClick={() => setCurrentIndex(currentIndex-1) } className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span onClick={() => setCurrentIndex(currentIndex+1) }className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;