import MovieInfo from "./MovieInfo";
import "./pages/addMovie/addMovie.css";

export interface IMovie {
  id: number;
  name: string;
  genre: string;
  tagline: string;
  country: string;
  year: number;
  director: string;
  actors: string;
  budget: number;
  rating: number;
  photo: any;
}

const MovieList = ({ movies, remove, edit, isAdmin }: any) => {
  return (
    <div className="MovieList">
      {movies.map((film: IMovie, index: number) => (
        <MovieInfo
          remove={remove}
          edit={edit}
          id={index + 1}
          film={film}
          key={film.id}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};

export default MovieList;
