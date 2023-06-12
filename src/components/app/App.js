import '../../index.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import NotFound from '../notFound/NotFound';
import Footer from '../footer/Footer';
import Main from '../main/Main'
import MoviesCardList from '../movies/moviesCardList/MoviesCardList';
import SearchForm from '../movies/searchForm/SearchForm';
// import Navigation from '../navigation/Navigation';
import Menu from '../menu/Menu';
import Register from '../register/Register';

function App() {
  return (
    <div className="App">
      {/* header routes */}
      <Routes>
        <Route path="/"
          element={
            <Header

            />
          } />
        <Route path="/movies"
          element={
            <Header
              headerName="Фильмы"
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              linkName3="Аккаунт"
              toLink3="/profile"
            />
          } />
        <Route path="/saved-movies"
          element={
            <Header
              headerName="Сохранённые фильмы"
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              linkName3="Аккаунт"
              toLink3="/profile"
            />
          } />
        <Route path="/profile"
          element={
            <Header
              headerName="профиль пользователя"
              linkName1="Фильмы"
              toLink1="/movies"
              linkName2="Сохранённые фильмы"
              toLink2="/saved-movies"
              linkName3="Аккаунт"
              toLink3="/profile"
            />
          } />

        <Route path="/sign-in"
          element={
            <Header

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
            <MoviesCardList />
          }
        />
        <Route path="/saved-movies"
          element={
            <MoviesCardList />
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
            <Register/>
          }
        />
      </Routes>


      {/* <Main /> */}
      {/* invisible components */}
      {/* <NotFound/> */}

    </div>
  );
}

export default App;
