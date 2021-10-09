import { useState } from "react";
import Btn from "./UI/button/Button";
import Image from "./UI/image/Image";
import Input from "./UI/input/Input";

const MovieChange = ({ film, edit, setMovieEdit }: any) => {
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
  } = film;

  const [movie, setMovie] = useState({
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
  });

  const approveChange = (e:any) => {
    e.preventDefault()

    const newEditedMovie = {
        ...movie,
      };

      setMovieEdit((value:any) => !value);

      edit(newEditedMovie)
  }

  const disapproveChange = () => {
    setMovieEdit((value:any) => !value);
  }

  return (
    <div className="film">
      <Input
        value={movie.name}
        onChange={(e: any) => setMovie({ ...movie, name: e.target.value })}
        placeholder="Название"
      />
      <Input
        value={movie.genre}
        onChange={(e: any) => setMovie({ ...movie, genre: e.target.value })}
        placeholder="Жанр"
      />
      <Input
        value={movie.tagline}
        onChange={(e: any) => setMovie({ ...movie, tagline: e.target.value })}
        placeholder="Слоган"
      />
      <Input
        value={movie.country}
        onChange={(e: any) => setMovie({ ...movie, country: e.target.value })}
        placeholder="Страна выпуска"
      />
      <Input
        value={movie.year}
        onChange={(e: any) => setMovie({ ...movie, year: e.target.value })}
        placeholder="Год выпуска"
      />
      <Input
        value={movie.director}
        onChange={(e: any) => setMovie({ ...movie, director: e.target.value })}
        placeholder="Режиссер"
      />
      <Input
        value={movie.actors}
        onChange={(e: any) => setMovie({ ...movie, actors: e.target.value })}
        placeholder="Актеры"
      />
      <Input
        value={movie.budget}
        onChange={(e: any) => setMovie({ ...movie, budget: e.target.value })}
        placeholder="Бюджет"
      />
      <Input
        value={movie.rating}
        onChange={(e: any) => setMovie({ ...movie, rating: e.target.value })}
        placeholder="Рейтинг"
      />
      <Image className="moviePhoto" />
      <Btn onClick={approveChange} className="sendBtn">
        Подтвердить
      </Btn>
      <Btn onClick={disapproveChange} className="uploadPhoto">
        Отменить
      </Btn>
    </div>
  );
};

export default MovieChange;
