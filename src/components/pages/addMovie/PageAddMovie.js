import * as React from "react";
import "./addMovie.css";
import MovieCreate from "../../MovieCreate";
import MovieList from "../../MovieList";

const PageAddMoviePage = () => {
  const [movies, setMovies] = React.useState([
    { id: "num1", name: "movieName1", info: "movieInfo1" },
    { id: "num2", name: "movieName2", info: "movieInfo2" },
    { id: "num3", name: "movieName3", info: "movieInfo3" },
    { id: "num4", name: "movieName4", info: "movieInfo4" },
  ]);

  const FilmCreate = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <div className="empty" />
      <div className="main">
        <div className="movieCreate">
          <MovieCreate create={FilmCreate} />
        </div>
        <MovieList movies={movies} />
      </div>
      <div className="empty" />
    </div>
  );
};

export default PageAddMoviePage;
