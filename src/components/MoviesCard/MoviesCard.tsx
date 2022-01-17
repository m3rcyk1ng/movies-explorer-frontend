import React, {useEffect, useState} from 'react';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import './MoviesCard.styles.css';
import { IMovieCardProps } from "./IMoviesCard";
import { movieCard } from "../../common/constants";

function MoviesCard({ userMovies, movie, handleCardDelete, handleCardSave}: IMovieCardProps) {
  const [isLike, setIsLike] = useState(false);
  const duration = formatedMovieDuration(movie.duration);

  function formatedMovieDuration(minutes: number) {
    if (minutes > 60) {
      return ((minutes / 60) | 0) + 'ч ' + (minutes % 60) + 'м';
    } else if (minutes === 60) {
      return ((minutes / 60) | 0) + 'ч ';
    } else {
      return minutes + ' мин';
    }
  }

  useEffect(() => {
    userMovies.map((userMovie) => {
      if (userMovie.movieId === movie.movieId) {
        setIsLike(true);
        movie._id = userMovie._id;
      } else {
        setIsLike(false);
        delete movie._id;
      }
    });
  }, [userMovies, movie]);

  function handleCardToggle() {
    if (isLike) {
      handleCardDelete(movie)
    } else {
      if (handleCardSave !== undefined) {
        handleCardSave(movie);
      }
    }
  }

  function handleSavedCardsDelete() {
    handleCardDelete(movie);
  }

  return (
    <div className="movie-card">
      <a href={movie.trailer} target="_blank" rel="noreferrer">
        <img className="movie-card__poster" src={movie.image} alt={movieCard.Poster} />
      </a>
      <div className="movie-card__container">
        <h3 className="movie-card__title">{movie.nameRU}</h3>
        <MovieCardButton isLike={isLike} handleCardToggle={handleCardToggle} handleSavedCardsDelete={handleSavedCardsDelete} />
      </div>
      <p className="movie-card__description">{duration}</p>
    </div>
  );
}

export default MoviesCard;