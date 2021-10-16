import "./addMovie.css";
import MovieCreate from "../../MovieCreate";
import MovieList, {IMovie} from "../../MovieList";
import useLocalStorage from "../../hooks/useLocalStorage";

const PageAddMovie = () => {
  const [movies, setMovies] = useLocalStorage("MovieData", []);

  const movieAdd = (newMovie: IMovie) => {
    setMovies([...movies, newMovie]);
  };

  const movieDelete = (movie: IMovie) => {
    setMovies(movies.filter((e: any) => e.id !== movie.id));
  };

  const movieChange = (newEditedMovie:IMovie) => {
     setMovies(movies.map((e: any) => {
       if (e.id === newEditedMovie.id) {
         return newEditedMovie;
        }
        return e;
      }
      ));
  };

  return (
    <div className="App">
      <div className="empty" />
      <div className="main">
        <div className="movieCreate">
          <MovieCreate create={movieAdd} />
        </div>
        <MovieList remove={movieDelete} edit={movieChange} movies={movies} isAdmin="true" />
      </div>
      <div className="empty" />
    </div>
  );
};

export default PageAddMovie;
