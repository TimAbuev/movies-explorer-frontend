import { useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard(props) {
  const {
    movie,
    currentRoute,
  } = props;

  const [isClicked, setClicked] = useState(false);

  const buttonClassName = currentRoute === '/movies'
    ? `${isClicked ? 'moviesCard__button_clicked' : `moviesCard__button-to-save`}`
    : `${isClicked ? 'moviesCard__button-to-close' : `moviesCard__button-to-close`}`;

  function handleClick() {
    currentRoute === '/movies'
    ? saveMovie()
    : deleteMovie()
  }

  function saveMovie() {
    console.log('click on saveMovie');
  }
  function deleteMovie() {
    console.log('click on deleteMovie');
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
      ></button>

    </div>
  );
}
export default MoviesCard;