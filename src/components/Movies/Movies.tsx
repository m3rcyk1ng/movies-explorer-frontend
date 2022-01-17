import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { moviesApi } from '../../utils/MoviesApi/MoviesApi';
import { IMovie } from './IMovies';
import moviePoster from '../../assets/images/gordonPoster.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { mainApi } from "../../utils/MainApi/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Movies.styles.css';

function Movies({ loggedIn, amountShowCards, setAmountShowCards, addShowCards }: any) {
  const [initialMovies, setInitialMovies] = useState([]);
  const [allMoviesFormated, setAllMoviesFormated] = useState<IMovie[]>([]); // ФИЛЬМЫ С АПИ
  const [userMovies , setUserMovies] = useState<IMovie[]>([]); // СОХРАНЕННЫЕ ФИЛЬМ НА НАШ БЭК
  const [moviesTumbler, setMoviesTumbler] = useState<boolean>(false); // КОРОТКОМЕТРАЖКИ
  const [moviesInputValue, setMoviesInputValue] = useState(''); // ЗАПРОС ПОИСКА
  const [renderFilms, setRenderFilms] = useState<IMovie[]>([]); // ФИЛЬМЫ ДЛЯ ОТРИСОВКИ
  const { currentUser } = React.useContext(CurrentUserContext)
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);
  const [isLoadingMovies , setIsLoadingMovies] = useState(false);

  function formatMovies(movies: any) {
    return movies.map((movie: any) => {
      const newMovie: IMovie = {
        country: movie.country ? movie.country : 'Не указано',
        director: movie.director ? movie.director : 'Не указано',
        duration: movie.duration ? movie.duration : 0,
        year: movie.year ? movie.year : 'Не указано',
        description: movie.description ? movie.description : 'Не указано',
        image: movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : moviePoster,
        trailer: movie.trailerLink
          ? movie.trailerLink
          : `https://www.youtube.com/results?search_query=смотреть+без+регистрации+и+смс+${movie.nameRU}`,
        thumbnail: movie.image.formats.thumbnail.url
          ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
          : moviePoster,
        owner: movie.owner ? movie.owner : 'Не указано',
        movieId: movie.id,
        nameEN: movie.nameEN ? movie.nameEN : 'Не указано',
        nameRU: movie.nameRU ? movie.nameRU : 'Не указано',
      };
      return newMovie;
    });
  }

  useEffect(() => {
    moviesApi.getBeatfilmMovies().then((allMovies) => {
      setInitialMovies(allMovies);
      setAllMoviesFormated(formatMovies(allMovies));
    });
  }, []);

  useEffect(() => {
    const localMovies = localStorage.getItem('userFilms');
    if (!localMovies) {
      setIsLoadingMovies(true);
      mainApi.getSavedMovies().then((res) => {
        const actualSavedFilms = checkCurrentUserMovies(res.data)
        localStorage.setItem('userFilms', JSON.stringify(actualSavedFilms));
        setUserMovies(actualSavedFilms);
        console.log('res', res);
      })
        .catch(console.log)
        .finally(() => setIsLoadingMovies(false));
    } else {
      setUserMovies(JSON.parse(localMovies));
    }
  }, []);

  function checkCurrentUserMovies(movies: IMovie[]) {
    const newSavedMovieList = movies.filter(
      (movie:IMovie) => movie.owner === currentUser._id)
    return newSavedMovieList;
  }

  useEffect(() => {
    localStorage.setItem('userFilms', JSON.stringify(userMovies));
  }, [userMovies])

  function handleDeleteCard(movie: IMovie) {
    const movieId = movie._id ?? '';
    mainApi.deleteMovie(movieId)
      .then(() => {
        const newUserMovies = userMovies.filter(movie => movie._id !== movieId);
        setUserMovies(newUserMovies);
      })
      .catch(console.log)
  }

  function handleSaveCard(movie: IMovie) {
    delete movie.owner;
    mainApi.saveMovie(movie)
      .then((res) => {
        setUserMovies([...userMovies, res.data])
      })
      .catch(console.log)
  }

  function handleMoviesFilter(arrayForSearch: IMovie[], query: string) {
    setIsLoadingMovies(true);
    setTimeout(() => setIsLoadingMovies(false), 1500)
    const newArray: IMovie[] = arrayForSearch.filter((card) => {
      if (card.nameRU.toLowerCase().includes(query)) {
        return card;
      }
    });
    if (newArray.length === 0) {
      setError(true);
      setErrorText('Ничего не найдено');
    } else if (query.length === 0) {
      setError(true);
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setError(false);
    }
    localStorage.setItem('filterCards', JSON.stringify(newArray));
    setRenderFilms(newArray);
    localStorage.setItem('moviesInputValue', JSON.stringify(query));
    localStorage.setItem('moviesTumbler', JSON.stringify(moviesTumbler));
  }

  useEffect(() => {
    const localFilterCards = localStorage.getItem('filterCards');
    if (localFilterCards) setRenderFilms(JSON.parse(localFilterCards));

    const localTumbler = localStorage.getItem('moviesTumbler');
    if (localTumbler) setMoviesTumbler(JSON.parse(localTumbler));

    const localMoviesInputValue = localStorage.getItem('moviesInputValue');
    if (localMoviesInputValue) setMoviesInputValue(JSON.parse(localMoviesInputValue));
  }, [])

  useEffect(() => {
    localStorage.setItem('moviesTumbler', JSON.stringify(moviesTumbler))
  }, [moviesTumbler])

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="movies">
        <SearchForm
          tumbler={moviesTumbler}
          setTumbler={setMoviesTumbler}
          handleFilter={handleMoviesFilter}
          arrayForSearch={allMoviesFormated}
          moviesInputValue={moviesInputValue}
        />
        {error ? (
          <p className="error-text">{errorText}</p>
        ) : (
          <MoviesCardList
            isLoadingMovies={isLoadingMovies}
            renderFilms={renderFilms}
            handleCardDelete={handleDeleteCard}
            userMovies={userMovies}
            handleCardSave={handleSaveCard}
            amountShowCards={amountShowCards}
            setAmountShowCards={setAmountShowCards}
            addShowCards={addShowCards}
            tumbler={moviesTumbler}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
