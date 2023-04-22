import React from "react";
import "./style.scss";

const generateImages = (images) => {
    return images.map((image, index) => {
        const className = `carousel-item ${index === 0 && "active"}`;
        return (
            <div key={`key-${image}`} className={className}>
                <img
                    src={image}
                    className="p-1 d-block w-100 rounded mh-20"
                    alt={image}
                />
            </div>
        );
    });
};

function Carousel({ id, images, onClick }) {
    return (
        <div
            className="carousel slide carousel-dark"
            data-testid="carousel"
            id={`carousel-${id}`}
        >
            <div className="carousel-inner" onClick={() => onClick()}>
                {images && generateImages(images)}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel-${id}`}
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousel-${id}`}
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
