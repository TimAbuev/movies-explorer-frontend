import React from 'react';
import '../../index.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [textError, setTextError] = React.useState('');
  const [isPreloaderShown, setPreloaderShown] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    checkToken();
  }, []);

  function handleInfoTooltip() {
    setInfoTooltipOpen(!isInfoTooltipOpen);
  }

  function handleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function handleLogin() {
    setLoggedIn(!loggedIn);
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
        setTimeout(function () {
          window.location.reload();
        }, 2000);
        console.log(err);
      })
      .finally(function () {
        setPreloaderShown(false);
      })
  }

  function checkToken() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        Auth.getContent(jwt).then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  function handleLogInSubmit(password, email) {
    setPreloaderShown(true);
    Auth.authorize(password, email)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          handleLogin();
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
        setTimeout(function () {
          window.location.reload();
        }, 2000);
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
        setCurrentUser(res);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={loggedIn ? (
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
                loggedIn={loggedIn}
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
                btnType="active"
              />
              <Footer />
            </>
          } />

          <Route path="/saved-movies" element={
            <>
              <ProtectedRoute
                loggedIn={loggedIn}
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
              <MoviesCardList btnType="to-close" />
              <Footer />
            </>
          } />

          <Route path="/profile" element={
            <>
              <ProtectedRoute
                loggedIn={loggedIn}
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
                loggedIn={loggedIn}
                isOpen={isInfoTooltipOpen}
                onUpdateUser={handleUpdateUser}
                handleLogin={handleLogin}
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
    </CurrentUserContext.Provider>
  );

}
export default App;
