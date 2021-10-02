import MovieInfo from "./MovieInfo";

const MovieList = ({movies}) => {
  return (
    <div className="MovieList">
      {movies.map((film, index) => (
        <MovieInfo number={index + 1} film={film} key={film.id} />
      ))}
    </div>
  );
};

export default MovieList;
