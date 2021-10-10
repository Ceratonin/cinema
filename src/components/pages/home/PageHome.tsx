import useLocalStorage from "../../hooks/useLocalStorage";
import MovieList from "../../MovieList";

const PageHome = () => {
  const [movies, setMovies] = useLocalStorage("MovieData", []);
  return (
    <div className="App">
      <div className="empty" />
      <div className="main">
        <MovieList movies={movies} />
      </div>
      <div className="empty" />
    </div>
  );
};

export default PageHome;
