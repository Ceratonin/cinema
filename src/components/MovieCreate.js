import { useState } from "react";
import Btn from "./UI/button/Button";
import Input from "./UI/input/Input";
import Image from "./UI/image/Image";

const MovieCreate = ({ create }) => {
  const [movie, setMovie] = useState({ name: "", info: "" });

  const addNewMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      ...movie,
      id: Date.now(),
    };
    create(newMovie);
    setMovie({ name: "", info: "" });
  };

  const uploadPhoto = (e) => {
    e.preventDefault();
  }

  return (
    <form name="albert">
      <Input
        className="Btn"
        value={movie.name}
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
        type="text"
        placeholder="Название"
      />
      <Input
        value={movie.info}
        onChange={(e) => setMovie({ ...movie, info: e.target.value })}
        type="text"
        placeholder="Жанр"
      />
      <Input type="text" placeholder="Слоган" />
      <Input type="text" placeholder="Страна выпуска" />
      <Input type="text" placeholder="Год выпуска" />
      <Input type="text" placeholder="Режиссер" />
      <Input type="text" placeholder="Актеры" />
      <Input type="text" placeholder="Бюджет" />
      <Input type="text" placeholder="Рейтинг" />
      <Image className="addPhoto"/>
      <Btn onClick={addNewMovie} className="sendBtn">Отправить</Btn>
      <Btn onClick={uploadPhoto} className="uploadPhoto">Добавить фото</Btn>
    </form>
  );
};

export default MovieCreate;
