import React from 'react';
import '../../index.css';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from '../header/Header';
import NotFound from '../notFound/NotFound';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import MoviesCardList from '../movies/moviesCardList/MoviesCardList';
import SearchForm from '../movies/searchForm/SearchForm';
import Menu from '../menu/Menu';
import Register from '../register/Register';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import * as Auth from '../../utils/Auth';
import ProtectedRoute from '../ProtectedRoute';
import mainApi from '../../utils/MainApi';
import { useMovies } from '../hooks/useMovies';
import { useUser } from '../hooks/useUser';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [textError, setTextError] = React.useState('');
  const [isPreloaderShown, setPreloaderShown] = React.useState(false);

  const {
    state: moviesState,
    handleSetSearch,
    handleSetShortMovies,
    filteredMovies,
    filteredMyMovies,
    moviesNotFound,
    myMoviesNotFound,
    handleFetchMovies,
    shortMovies,
    handleDeleteMovie,
    handleCreateMovie,
  } = useMovies();

  const navigate = useNavigate();
  const location = useLocation();
  const user = useUser();
  const isLogged = Boolean(user);

  function handleInfoTooltip() {
    setInfoTooltipOpen(!isInfoTooltipOpen);
  }

  function handleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function closeAllPopups() {
    isMenuOpen && handleMenu();
  }

  function handleRegisterSubmit(name, email, password) {
    setPreloaderShown(true);
    Auth.register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogInSubmit(password, email)
        }
      })
      .catch((err) => {
        handleInfoTooltip();
        console.log(err);
      })
      .finally(function () {
        setPreloaderShown(false);
      })
  }

  function handleLogInSubmit(password, email) {
    setPreloaderShown(true);
    Auth.authorize(password, email)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          navigate('/movies', { replace: true });
          window.location.reload();
        }
      })
      .catch((err) => {
        handleInfoTooltip();
        if (err === 'Ошибка 401') {
          setTextError('Вы ввели неправильный логин или пароль. ');
        }
        else {
          setTextError(' При авторизации произошла ошибка.');
        }
        console.log(err);
      })
      .finally(function () {
        setPreloaderShown(false);
      })
  }

  function handleUpdateUser(data) {
    setPreloaderShown(true);
    mainApi.editInfo(data)
      .then(function () {
        window.location.reload();
      })
      .catch(function (err) {
        handleInfoTooltip();
        setTimeout(function () {
          window.location.reload();
        }, 2000);
        console.log('ошибка', err);
      })
      .finally(function () {
        setPreloaderShown(false);
      })
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLogged ? (
          <>
            <Header
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              handleMenu={handleMenu}
              toHideAccount={false}
              toHideBtn={true}
              toHideBurger={false}
            />
            <Main />
            <Footer />
          </>
        ) : (
          <>
            <Header
              toHideAccount={true}
              toHideBtn={false}
              toHideBurger={true}
            />
            <Main />
            <Footer />
          </>
        )} />

        <Route path="/movies" element={
          <>
            <ProtectedRoute
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              handleMenu={handleMenu}
              toHideAccount={false}
              toHideBtn={true}
              toHideBurger={false}
              component={Header}
            />
            <SearchForm
              handleSetShortMovies={handleSetShortMovies}
              handleSetSearch={handleSetSearch}
              handleFetchMovies={handleFetchMovies}
              shortMovies={shortMovies}
              moviesState={moviesState}
              currentRoute={location.pathname}
            />
            <MoviesCardList
              moviesState={moviesState}
              currentRoute={location.pathname}
              onMovieSave={handleCreateMovie}
              onMovieDelete={handleDeleteMovie}
              filteredMovies={filteredMovies}
              filteredMyMovies={filteredMyMovies}
              moviesNotFound={moviesNotFound}
            />
            <Footer />
          </>
        } />

        <Route path="/saved-movies" element={
          <>
            <ProtectedRoute
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              handleMenu={handleMenu}
              toHideAccount={false}
              toHideBtn={true}
              toHideBurger={false}
              component={Header}
            />
            <SearchForm
              handleSetShortMovies={handleSetShortMovies}
              handleSetSearch={handleSetSearch}
              handleFetchMovies={handleFetchMovies}
              shortMovies={shortMovies}
              moviesState={moviesState}
            />
            <MoviesCardList
              moviesState={moviesState}
              currentRoute={location.pathname}
              onMovieSave={handleCreateMovie}
              onMovieDelete={handleDeleteMovie}
              filteredMovies={filteredMovies}
              filteredMyMovies={filteredMyMovies}
              myMoviesNotFound={myMoviesNotFound}
            />
            <Footer />
          </>
        } />

        <Route path="/profile" element={
          <>
            <ProtectedRoute
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              handleMenu={handleMenu}
              toHideAccount={false}
              toHideBtn={true}
              toHideBurger={false}
              component={Header}
            />
            <ProtectedRoute
              isOpen={isInfoTooltipOpen}
              onUpdateUser={handleUpdateUser}
              // handleLogin={handleLogin}
              component={Profile}
              isShown={isPreloaderShown}
              currentUser={user}
            />
          </>
        } />

        <Route path="/notFound" element={<NotFound />} />

        <Route path="/signup" element={isLogged ? (
          <Navigate to="/" />
        ) : (
          <Register
            isOpen={isInfoTooltipOpen}
            handleRegisterSubmit={handleRegisterSubmit}
            isShown={isPreloaderShown}
          />
        )} />

        <Route path="/signin" element={isLogged ? (
          <Navigate to="/" />
        ) : (
          <Login
            textError={textError}
            handleLogInSubmit={handleLogInSubmit}
            isOpen={isInfoTooltipOpen}
            isShown={isPreloaderShown}
          />
        )} />

        <Route
          path='*'
          element={<NotFound />}
        />

      </Routes>

      {/* invisible components */}
      <Menu
        linkName1="Фильмы"
        toLink1="/movies"
        linkName2="Сохранённые фильмы"
        toLink2="/saved-movies"
        toClose={closeAllPopups}
        isOpen={isMenuOpen}
      />
    </div>
  );

}
export default App;
