import '../../index.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"
          element={
            <Header
              headerName="about проекте"
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
              headerName="Авторизация"
            />
          } />
        <Route path="/signup"
          element={
            <Header
              headerName="Регистрация"
            />
          } />

      </Routes>
    </div>
  );
}

export default App;
