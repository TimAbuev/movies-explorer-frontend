import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MoviesCard(props) {
  const {
    movie,
    currentRoute,
    onMovieDelete,
    onMovieSave,
  } = props;

  const [isClicked, setClicked] = useState(
    localStorage.getItem(`movie_${movie.id}_clicked`) === "true" // Проверяем сохраненное состояние в localStorage при загрузке компонента
  );

  const buttonClassName = currentRoute === '/movies'
    ? `${isClicked ? 'moviesCard__button_clicked' : `moviesCard__button-to-save`}`
    : `moviesCard__button-to-close`;

  function handleClick() {
    currentRoute === '/movies'
      ? saveOrDeleteMovie()
      : deleteMovie()
  }

  function saveOrDeleteMovie() {
    if (isClicked) {
      setClicked(false);
      localStorage.setItem(`movie_${movie.id}_clicked`, "false"); // Сохраняем состояние в localStorage при нажатии кнопки
      onMovieDelete(movie);
    } else {
      setClicked(true);
      localStorage.setItem(`movie_${movie.id}_clicked`, "true"); // Сохраняем состояние в localStorage при нажатии кнопки
      onMovieSave(movie);
    }
  }

  function deleteMovie() {
    onMovieDelete(movie);
    localStorage.setItem(`movie_${movie.id}_clicked`, "false");
  }

  useEffect(() => {
    if (localStorage.getItem(`movie_${movie.id}_clicked`) === "true") {
      setClicked(true);
    }
  }, [movie.id]);

  return (
    <div className="moviesCard">
      <div className="moviesCard__text-container">
        <p className="moviesCard__name">{movie.nameRU}</p>
        <p className="moviesCard__duration">минут: {movie.duration}</p>
      </div>
      <Link className="moviesCard__link" to={movie.trailerLink}>
        <img
          className="moviesCard__img"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.nameRU}
        />
      </Link>

      <button
        className={buttonClassName}
        onClick={handleClick}
      ></button>
    </div>
  );
}
export default MoviesCard;