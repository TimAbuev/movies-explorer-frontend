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
import api from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setMenuOpen] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userEmail, setEmail] = React.useState('');
  const [userPassword, setPassword] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    api.getProfile()
      .then(function (res) {
        setCurrentUser(res)
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })

  }, []);

  function handleEditMenuClick() {
    setMenuOpen(!isMenuOpen);
  }

  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  function closeAllPopups() {
    isMenuOpen && handleEditMenuClick();
  }

  function handleRegisterSubmit(name, email, password) {
    Auth.register(name, email, password)
      .then((res) => {
        if (res) {
          // handleLuckyInfoTooltip();
          handleLogInSubmit(password, email)
        }
      })
      .catch((err) => {
        // handleUnLuckyInfoTooltip();
        console.log(err);
      })
  }

  function checkToken() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        Auth.getContent(jwt).then((res) => {
          // const data = {
          //   id: res._id,
          //   email: res.email
          // }
          setLoggedIn(true);
          // setUserData(data);
          // navigate('/movies', { replace: true });
        })
          .catch((err) => console.log(err));
      }
    }
  }

  function handleLogInSubmit(password, email) {
    Auth.authorize(password, email)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          handleLogin();
          navigate('/movies', { replace: true });
          // window.location.reload();
        }
      })
      .catch((err) => {
        // handleUnLuckyInfoTooltip();
        console.log(err);
      })
  }

  function handleUpdateUser(data) {
    api.editInfo(data)
      .then(function (res) {
        setCurrentUser(res);
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {/* header routes */}
        <Routes>
          <Route path="/"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                headerName="Фильмы"
                linkName1="Фильмы"
                toLink1="/movies"
                linkName2="Сохранённые фильмы"
                toLink2="/saved-movies"
                component={Header}
              />
            } />
          <Route path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                headerName="Фильмы"
                linkName1="Фильмы"
                toLink1="/movies"
                linkName2="Сохранённые фильмы"
                toLink2="/saved-movies"
                component={Header}
              />
            } />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                headerName="Сохранённые фильмы"
                linkName1="Фильмы"
                toLink1="/movies"
                linkName2="Сохранённые фильмы"
                toLink2="/saved-movies"
                component={Header}
              />
            } />
          <Route path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                headerName="Сохранённые фильмы"
                linkName1="Фильмы"
                toLink1="/movies"
                linkName2="Сохранённые фильмы"
                toLink2="/saved-movies"
                component={Header}
              />
            } />

        </Routes>

        {/*main routes*/}
        <Routes>
          <Route path="/"
            element={
              <Main

              />
            } />
        </Routes>

        {/*  SearchForm routes */}
        <Routes>
          <Route path="/movies"
            element={
              <SearchForm />
            }
          />
          <Route path="/saved-movies"
            element={
              <SearchForm />
            }
          />
        </Routes>

        {/* moviesCardLIst routes */}
        <Routes>
          <Route path="/movies"
            element={
              <MoviesCardList
                btnType="active"
              />
            }
          />
          <Route path="/saved-movies"
            element={
              <MoviesCardList
                btnType="to-close"
              />
            }
          />
        </Routes>

        {/* footer routes */}
        <Routes>
          <Route path="/"
            element={
              <Footer />
            }
          />
          <Route path="/movies"
            element={
              <Footer />
            }
          />
          <Route path="/saved-movies"
            element={
              <Footer />
            }
          />


        </Routes>

        {/* {404 routes} */}
        <Routes>
          <Route path="/notFound"
            element={
              <NotFound />
            }
          />
        </Routes>

        {/* {menu} */}
        <Routes>
          <Route path="/menu"
            element={
              <Menu
                linkName1="Главная"
                linkName2="Фильмы"
                linkName3="Сохранённые фильмы"
              />
            }
          />
        </Routes>

        {/* Register */}
        <Routes>
          <Route path="/signup"
            element={
              <Register 
              handleRegisterSubmit={handleRegisterSubmit} 
              />
            }
          />
        </Routes>

        {/* Login */}
        <Routes>
          <Route path="/signin"
            element={
              <Login
               handleLogInSubmit={handleLogInSubmit} 
               email={userEmail}
               setEmail={setEmail}
               password={userPassword}
               setPassword={setPassword}
               />
            }
          />
        </Routes>

        {/* Profile */}
        <Routes>
          <Route path="/profile"
            element={
              <Profile 
                onUpdateUser={handleUpdateUser}
                handleLogin={handleLogin}
              />
            }
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
    </CurrentUserContext.Provider>
  );
}

export default App;
