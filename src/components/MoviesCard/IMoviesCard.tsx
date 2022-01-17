import { IMovie } from "../Movies/IMovies";

export interface IMovieCardProps {
  movie: IMovie,
  handleCardDelete: (movie: IMovie) => void,
  handleCardSave?: (movie: IMovie) => void,
  userMovies: IMovie[],
}
