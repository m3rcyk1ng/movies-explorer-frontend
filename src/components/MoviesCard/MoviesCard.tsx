import React from 'react';
import moviePoster from '../../assets/images/korei.png';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import './MoviesCard.styles.css';

function MoviesCard() {
  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={moviePoster} alt="Постер фильма" />
      <div className="movie-card__container">
        <h3 className="movie-card__title">Лучший интервьюер</h3>
          <MovieCardButton />
      </div>
      <p className="movie-card__description">1ч42м</p>
    </div>
  );
}

export default MoviesCard;