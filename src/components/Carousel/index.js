import React from "react";

function Carousel({ id, images, onClick }) {

  const generateImages = () => {
    return images && images.map((image, index) => {
      const className = `carousel-item ${index === 0 ? 'active': ''}`;
      return <div key={`key-${image}`} className={className}>
        <img src={image} className="d-block w-100 rounded" alt={image} />
      </div>
    });
  }

  return (
    <div
      className="carousel slide carousel-dark"
      data-testid="carousel"
      id={`carousel-${id}`}
    >
      <div className="carousel-inner" onClick={() => onClick()}>
        {generateImages()}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;