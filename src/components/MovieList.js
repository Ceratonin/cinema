import MovieInfo from "./MovieInfo";
import "./pages/addMovie/addMovie.css"

const MovieList = ({movies, remove}) => {
  return (
    <div className="MovieList">
      {movies.map((film) => (
        <MovieInfo remove={remove} film={film} key={film.id} />
      ))}
    </div>
  );
};

export default MovieList;
