import React, { useState } from 'react';
import './MovieCardButton.styles.css';
import { useLocation } from 'react-router-dom';

function MovieCardButton() {
  const { pathname } = useLocation();
  const [isAdded, setIsAdded] = useState(false);

  function toggleButton() {
    setIsAdded(true);
  }

  return (
    <>
      {pathname === '/movies' && (
        <button
          onClick={toggleButton}
          className={!isAdded ? 'movie-card__button_save' : 'movie-card__button_saved'}
        >
          {!isAdded ? '' : ''}
        </button>
      )}
      {pathname === '/saved-movies' && <button className="movie-card__button-delete" type="button" />}
    </>
  );
}

export default MovieCardButton;
