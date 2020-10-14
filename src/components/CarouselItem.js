import React from "react";
import "./styles/CarouselItem.css";
import playIcon from "../images/play-icon.png";
import plusIcon from "../images/plus-icon.png";


export const CarouselItem = ({ movie }) => {
  return (
    <div className="carousel-item1">
      <img
        className="carousel-item1__img"
        src={movie.Poster}
        alt={movie.Title}
        width="100%"
      />
      <div className="carousel-item1__details">
        <div className="carousel-item1__details-container">
          <img
            className="carousel-item1__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item1__details--img"
            src={plusIcon}
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item1__details--title">{movie.Title}</p>
        <p className="carousel-item1__details--subtitle">
          {movie.Year} {movie.Type}
        </p>
      </div>
    </div>
  );
};
export default CarouselItem;
