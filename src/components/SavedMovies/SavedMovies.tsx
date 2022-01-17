import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { mainApi } from "../../utils/MainApi/MainApi";
import { IMovie } from "../Movies/IMovies";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedMovies.styles.css';

function SavedMovies({ loggedIn, amountShowCards, setAmountShowCards, addShowCards }: any) {
  const [userMovies, setUserMovies] = useState<IMovie[]>([]);
  const [savedMoviesTumbler, setSavedMoviesTumbler] = useState(false);
  const { currentUser } = React.useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);
  const [savedMoviesInputValue, setSavedMoviesInputValue] = useState('');

  useEffect(() => {
    const localMovies = localStorage.getItem('userFilms');

    if (localMovies) {
      setUserMovies(JSON.parse(localMovies));
    } else {
      mainApi
        .getSavedMovies()
        .then((res) => {
          const actualSavedFilms = checkCurrentUserMovies(res.data)
          localStorage.setItem('userFilms', JSON.stringify(actualSavedFilms));
          setUserMovies(actualSavedFilms);
        })
        .catch(console.log);
    }
  }, []);

  function checkCurrentUserMovies(movies: IMovie[]) {
    const newSavedMovieList = movies.filter(
      (movie:IMovie) => movie.owner === currentUser._id)
    return newSavedMovieList;
  }

  function handleCardDelete(movie: IMovie) {
    const currMovie = userMovies.find((userMovie: { movieId: number; }) => userMovie.movieId === movie.movieId)
    const movieId = currMovie?._id

    // @ts-ignore
    mainApi.deleteMovie(movieId)
      .then(() => {
        const newUserMovies = userMovies.filter((movie: IMovie) => movie._id !== movieId);
        setUserMovies(newUserMovies);
        localStorage.setItem('userFilms',  JSON.stringify(newUserMovies));
      })
      .catch(console.log)
  }

  function handleSavedMoviesFilter(arrayForSearch: IMovie[], query: string) {
    const newArray: IMovie[] = arrayForSearch.filter((card) => {
      if (card.nameRU.toLowerCase().includes(query)) {
        return card;
      }
    });
    if (newArray.length === 0) {
      setError(true);
      setErrorText('Ничего не найдено');
    } else if (savedMoviesInputValue.length === 0) {
      setError(true);
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setError(false);
    }

    localStorage.setItem('filterSavedCards', JSON.stringify(newArray));
    const localFilterSavedCards = localStorage.getItem('filterSavedCards')
    if (localFilterSavedCards) setUserMovies(JSON.parse(localFilterSavedCards));
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="movies">
        <SearchForm
          tumbler={savedMoviesTumbler}
          setTumbler={setSavedMoviesTumbler}
          handleFilter={handleSavedMoviesFilter}
          arrayForSearch={userMovies}
        />
        {error ? (
          <p className="error-text">{errorText}</p>
        ) : (
          <MoviesCardList
            renderFilms={userMovies}
            handleCardDelete={handleCardDelete}
            userMovies={userMovies}
            amountShowCards={amountShowCards}
            setAmountShowCards={setAmountShowCards}
            addShowCards={addShowCards}
            tumbler={savedMoviesTumbler}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
