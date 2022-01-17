import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.styles.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const { pathname } = useLocation();

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/movies' && <MoviesCard />}
        {pathname === '/saved-movies' && <MoviesCard />}
        {pathname === '/saved-movies' && <MoviesCard />}
        {pathname === '/saved-movies' && <MoviesCard />}
      </div>
    </section>
  );
}

export default MoviesCardList;
