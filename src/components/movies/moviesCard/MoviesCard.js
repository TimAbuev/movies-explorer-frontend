import { useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard(props) {
  const {
    movie,
    currentRoute,
    onMovieDelete,
    onMovieSave,
  } = props;

  const [isClicked, setClicked] = useState(false);

  const buttonClassName = currentRoute === '/movies'
    ? `${isClicked ? 'moviesCard__button_clicked' : `moviesCard__button-to-save`}`
    : `moviesCard__button-to-close`;

  function handleClick() {
    currentRoute === '/movies'
    ? saveMovie()
    : deleteMovie()
  }

  function saveMovie() {
    setClicked(true)
    onMovieSave(movie);
  }

  function deleteMovie() {
    onMovieDelete(movie);
  }

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
        disabled={isClicked}
      ></button>

    </div>
  );
}
export default MoviesCard;