import React from "react";
// import image from '../image.jpg'

const Movie = (props) => {
  return (
    <>
      <div className="movieDiv">
        <img src={props.movie.image} alt="here should be a img" />
        <h2 className="title">{props.movie.title}</h2>
        <a href={props.movie.video} target="_blank" rel="noreferrer" className="button">Watch Now</a>
      </div>
    </>
  );
};

export default Movie;
