import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { mainApi } from "./utils/MainApi/MainApi";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SavedMovies from "./components/SavedMovies/SavedMovies";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(true);
  const [amountShowCards, setAmountShowCards] = useState<number>(
    window.innerWidth > 1279 ? 12 : window.innerWidth > 767 ? 8 : 5,
  );
  const [addShowCards, setAddShowCards] = useState<number>(window.innerWidth > 1279 ? 3 : 2);
  const contextValue = { currentUser, setCurrentUser }

  function handleLogin(values: any) {
    mainApi.login(values)
      .then(() => {
        delete values.password;
        getUserValues();
        setLoggedIn(true);
        navigate('/movies')
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log(error);
      });
  }

  function handleSignOut() {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({})
        localStorage.removeItem('filterCards')
        localStorage.removeItem('filterSavedCards')
        localStorage.removeItem('moviesTumbler')
        localStorage.removeItem('userFilms')
        localStorage.removeItem('moviesInputValue')
        navigate('/')
      })
      .catch(console.log);
  }

  function getUserValues() {
    mainApi.getUserInfo()
      .then(res => {
        setLoggedIn(true)
        setCurrentUser(res.data)
      })
      .catch(err => {
        setLoggedIn(false)
        setCurrentUser({})
        console.log(err)
      })
  }

  // Проверка на входе
  useEffect(() => {
    getUserValues();
  },[])

  // Автоматическое определение размера экрана
  window.onresize = () => {
    if (window.innerWidth > 1279) {
      setAddShowCards(3);
    } else {
      setAddShowCards(2);
    }
  };

  return (
    <CurrentUserContext.Provider value={contextValue}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
              amountShowCards={amountShowCards}
              setAmountShowCards={setAmountShowCards}
              addShowCards={addShowCards}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn}
              amountShowCards={amountShowCards}
              setAmountShowCards={setAmountShowCards}
              addShowCards={addShowCards}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              component={Profile}
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
            />
          }
        />
        <Route path="/signup" element={<Register handleLogin={handleLogin} />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
