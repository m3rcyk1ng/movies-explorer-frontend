import React from 'react';
import './MovieCardButton.styles.css';
import { useLocation } from 'react-router-dom';

function MovieCardButton({ handleCardToggle, isLike, handleSavedCardsDelete }: { handleCardToggle: () => void, isLike: boolean, handleSavedCardsDelete: () => void }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/movies' && (
        <button
          onClick={handleCardToggle}
          className={!isLike ? 'movie-card__button_save' : 'movie-card__button_saved'}
        />
      )}
      {pathname === '/saved-movies' && <button className="movie-card__button-delete" type="button" onClick={handleSavedCardsDelete} />}
    </>
  );
}

export default MovieCardButton;
