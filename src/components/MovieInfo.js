import React from "react";

const MovieInfo = ({ film, remove }) => {
  const {
    name,
    genre,
    tagline,
    country,
    year,
    director,
    actors,
    budget,
    rating,
  } = film;

  const filmRemove = () => {
    remove(film);
  };
  return (
    <div className="film">
      <div className="fragment">{name}</div>
      <div className="fragment">{genre}</div>
      <div className="fragment">{tagline}</div>
      <div className="fragment">{tagline}</div>
      <div className="fragment">{country}</div>
      <div className="fragment">{year}</div>
      <div className="fragment">{director}</div>
      <div className="fragment">{actors}</div>
      <div className="fragment">{budget}</div>
      <div>{rating}</div>
      <button className="changeBtn" onClick={filmRemove} type="button">
        Удалить
      </button>
      <button className="deleteBtn" type="button">
        Изменить
      </button>
    </div>
  );
};

export default MovieInfo;
