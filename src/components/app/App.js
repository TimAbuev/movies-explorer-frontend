import React from 'react';
import '../../index.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
  const { state: moviesState, setState: setMoviesState } = useMovies();
  const user = useUser();
  const isLogged = Boolean(user);
  console.log({user, isLogged});
  const navigate = useNavigate();
  const location = useLocation();

  // React.useEffect(() => {
  //   checkToken();
  // }, []);

  // function checkToken() {
  //   if (localStorage.getItem('jwt')) {
  //     const jwt = localStorage.getItem('jwt');
  //     if (jwt) {
  //       Auth.getContent(jwt).then((res) => {
  //         setLoggedIn(true);
  //         setCurrentUser(res);
  //       })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   }
  // }

  function handleInfoTooltip() {
    setInfoTooltipOpen(!isInfoTooltipOpen);
  }

  function handleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  // function handleLogin() {
  //   setUserState(!isLogged);
  // }

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
        // setTimeout(function () {
        //   window.location.reload();
        // }, 2000);
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
          // handleLogin();
          navigate('/movies', { replace: true });
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
        // setTimeout(function () {
        //   window.location.reload();
        // }, 2000);
        console.log(err);
      })
      .finally(function () {
        setPreloaderShown(false);
      })
  }

  function handleUpdateUser(data) {
    setPreloaderShown(true);
    mainApi.editInfo(data)
      .then(function (res) {
        // setCurrentUser(res);
        window.location.reload();
      })
      .catch(function (err) {
        handleInfoTooltip();
        setTimeout(function () {
          window.location.reload();
        }, 2000);
        // navigate('/profile', { replace: true });
        console.log('ошибка', err);
      })
      .finally(function () {
        setPreloaderShown(false);
      })
  }

  function handleDeleteMovie(movie) {
    console.log("and now ......." + movie._id);
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setMoviesState((prevState) => ({
          ...prevState, myMovies:
            prevState.myMovies.filter((m) => m.id !== movie.id)
        }));
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }

  function handleCreateMovie(data) {
    mainApi.createMovie(data)
      .then(function (res) {
        setMoviesState((prevState) => ({
          ...prevState, myMovies:
          prevState.myMovies.push(res)
        }));
        // window.location.reload();
      })
      .catch(function (err) {
        // handleInfoTooltip();
        console.log('ошибка', err);
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
                loggedIn={isLogged}
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
              <SearchForm />
              <MoviesCardList
                moviesState={moviesState}
                keyOfObject={"movies"}
                currentRoute={location.pathname}
                onMovieSave={handleCreateMovie}
              />
              <Footer />
            </>
          } />

          <Route path="/saved-movies" element={
            <>
              <ProtectedRoute
                loggedIn={isLogged}
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
              <SearchForm />
              <MoviesCardList
                moviesState={moviesState}
                keyOfObject={"myMovies"}
                currentRoute={location.pathname}
                onMovieDelete={handleDeleteMovie}
              />
              <Footer />
            </>
          } />

          <Route path="/profile" element={
            <>
              <ProtectedRoute
                loggedIn={isLogged}
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
                loggedIn={isLogged}
                isOpen={isInfoTooltipOpen}
                onUpdateUser={handleUpdateUser}
                // handleLogin={handleLogin}
                component={Profile}
                isShown={isPreloaderShown}
              />
            </>
          } />

          <Route path="/notFound" element={<NotFound />} />

          <Route path="/signup" element={(
            <Register
              isOpen={isInfoTooltipOpen}
              handleRegisterSubmit={handleRegisterSubmit}
              isShown={isPreloaderShown}
            />
          )} />

          <Route path="/signin" element={(
            <Login
              textError={textError}
              handleLogInSubmit={handleLogInSubmit}
              isOpen={isInfoTooltipOpen}
              isShown={isPreloaderShown}
            />
          )} />

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
