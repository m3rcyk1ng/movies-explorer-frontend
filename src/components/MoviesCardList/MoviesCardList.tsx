import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.styles.css';
import { ICardListProps } from './IMoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  tumbler,
  renderFilms,
  handleCardDelete,
  handleCardSave,
  userMovies,
  amountShowCards,
  setAmountShowCards,
  addShowCards,
  isLoadingMovies,
}: ICardListProps) {
  const [moreButton, setMoreButton] = useState(true);

  useEffect(() => {
    if (renderFilms.length <= amountShowCards) {
      setMoreButton(false);
    } else {
      setMoreButton(true);
    }
  }, [renderFilms, amountShowCards]);

  let tumblerFilteredArray = renderFilms.filter((card) => {
    if (!tumbler || (tumbler && card.duration <= 40)) {
      return card;
    }
  });

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {isLoadingMovies ?
          <div className="movies-preloader">
            <Preloader />
          </div>
            : tumblerFilteredArray.slice(0, amountShowCards).map((movie) => (
          <MoviesCard
            movie={movie}
            handleCardDelete={handleCardDelete}
            handleCardSave={handleCardSave}
            userMovies={userMovies}
          />
        ))}
      </div>
      {moreButton && (
        <ButtonMore
          setAmountShowCards={setAmountShowCards}
          amountShowCards={amountShowCards}
          addShowCards={addShowCards}
        />
      )}
    </section>
  );
}

export default MoviesCardList;
