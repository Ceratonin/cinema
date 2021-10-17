// HACPAHO

import { useEffect, useState } from "react";
import MovieChange from "./MovieEdit";
import Btn from "./UI/button/Button";
import Image from "./UI/image/Image";

const MovieInfo = ({ film, remove, edit, isAdmin }: any) => {
  const {
    id,
    name,
    genre,
    tagline,
    country,
    year,
    director,
    actors,
    budget,
    rating,
    photo,
  } = film;

  let showBtn;

  const [movieEdit, setMovieEdit] = useState(false);

  const movieRemove = () => {
    remove(film);
  };

  const movieChange = () => {
    setMovieEdit((value) => !value);
  };

  useEffect(() => {}, [movieEdit]);

  if (isAdmin) {
    showBtn = (
      <>
        <Btn className="changeBtn" onClick={movieChange} type="button">
          Изменить
        </Btn>
        <Btn className="deleteBtn" onClick={movieRemove} type="button">
          Удалить
        </Btn>
        <Image className="moviePhoto" src={photo} />
      </>
    )
  } else {
    showBtn = <Image className="moviePhoto__home" src={photo} />
  }

  return movieEdit === false ? (
    <div className="film">
      <div className="fragment">{name}</div>
      <div className="fragment">«{genre}»</div>
      <div className="fragment">{tagline}</div>
      <div className="fragment">{country}</div>
      <div className="fragment">{year} год</div>
      <div className="fragment">{director}</div>
      <div className="fragment">{actors}</div>
      <div className="fragment">$ {budget}</div>
      <div className="fragment">{rating}/10</div>
      {showBtn}
    </div>
  ) : (
    <MovieChange film={film} edit={edit} setMovieEdit={setMovieEdit} />
  );
};

export default MovieInfo;
