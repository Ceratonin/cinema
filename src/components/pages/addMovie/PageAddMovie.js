import * as React from "react";
import "./addMovie.css";
import MovieCreate from "../../MovieCreate";
import MovieList from "../../MovieList";

const PageAddMoviePage = () => {
  const [movies, setMovies] = React.useState([
    {
      id: "num1",
      name: "name1",
      genre: "genre1",
      tagline: "tagline1",
      country: "country1",
      year: "year1",
      director: "director1",
      actors: "actors1",
      budget: "budget1",
      rating: "rating1",
    },
    {
      id: "num2",
      name: "name2",
      genre: "genre2",
      tagline: "tagline2",
      country: "country2",
      year: "year2",
      director: "director2",
      actors: "actors2",
      budget: "budget2",
      rating: "rating2",
    },
  ]);

  const filmCreate = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filmDelete = (film) => {
    setMovies(movies.filter((e) => e.id !== film.id));
  };

  const filmChange = () => {
    setMovies();
  };

  return (
    <div className="App">
      <div className="empty" />
      <div className="main">
        <div className="movieCreate">
          <MovieCreate create={filmCreate} />
        </div>
        <MovieList remove={filmDelete} movies={movies} />
      </div>
      <div className="empty" />
    </div>
  );
};

export default PageAddMoviePage;
