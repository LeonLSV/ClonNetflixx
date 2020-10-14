import React from "react";

export const Card = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="card-img-top"
          width="100%"
        />
        <div>
          <h4>
            {movie.Title} {movie.Year}
          </h4>
          <p>{movie.Type} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
