import { useState } from "react";
import Btn from "./UI/button/Button";
import Input from "./UI/input/Input";
import Image from "./UI/image/Image";

const MovieCreate = ({ create }) => {
  const [movie, setMovie] = useState({
    name: "",
    genre: "",
    tagline: "",
    country: "",
    year: "",
    director: "",
    actors: "",
    budget: "",
    rating: "",
  });

  const addNewMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      ...movie,
      id: Date.now(),
    };
    create(newMovie);
    setMovie({
      name: "",
      genre: "",
      tagline: "",
      country: "",
      year: "",
      director: "",
      actors: "",
      budget: "",
      rating: "",
    });
  };

  const uploadPhoto = (e) => {
    e.preventDefault();
  };

  return (
    <form name="albert">
      <Input
        value={movie.name}
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
        placeholder="Название"
      />
      <Input
        value={movie.genre}
        onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        placeholder="Жанр"
      />
      <Input
        value={movie.tagline}
        onChange={(e) => setMovie({ ...movie, tagline: e.target.value })}
        placeholder="Слоган"
      />
      <Input
        value={movie.country}
        onChange={(e) => setMovie({ ...movie, country: e.target.value })}
        placeholder="Страна выпуска"
      />
      <Input
        value={movie.year}
        onChange={(e) => setMovie({ ...movie, year: e.target.value })}
        placeholder="Год выпуска"
      />
      <Input
        value={movie.director}
        onChange={(e) => setMovie({ ...movie, director: e.target.value })}
        placeholder="Режиссер"
      />
      <Input
        value={movie.actors}
        onChange={(e) => setMovie({ ...movie, actors: e.target.value })}
        placeholder="Актеры"
      />
      <Input
        value={movie.budget}
        onChange={(e) => setMovie({ ...movie, budget: e.target.value })}
        placeholder="Бюджет"
      />
      <Input
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        placeholder="Рейтинг"
      />
      <Image className="addPhoto" />
      <Btn onClick={addNewMovie} className="sendBtn">
        Отправить
      </Btn>
      <Btn onClick={uploadPhoto} className="uploadPhoto">
        Добавить фото
      </Btn>
    </form>
  );
};

export default MovieCreate;
