import { useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard(props) {
  const {
    movie,
    currentRoute,
    onMovieDelete,
    onMovieSave,
    additionalMovie,
  } = props;



  const [isClicked, setClicked] = useState(false);

  const buttonClassName = currentRoute === '/movies'
    ? `${isClicked ? 'moviesCard__button_clicked' : `moviesCard__button-to-save`}`
    : `moviesCard__button-to-close`;

  function handleClick() {
    currentRoute === '/movies'
      ? saveOrDeleteMovie()
      : onMovieDelete(movie)
  }

  function saveOrDeleteMovie() {
    if (isClicked === true) {
      setClicked(!isClicked)
      deleteMovieFromDatabaseOnly();
    }
    else if (isClicked === false) {
      setClicked(!isClicked)
      onMovieSave(movie);
      console.log(movie);
    }

  }

  function deleteMovieFromDatabaseOnly() {
    console.log(additionalMovie);
    // mainApi.deleteMovie(additionalMovie._id)
    // .then(() => {
    //   console.log('movies is deleted from DB');
    // })
    // .catch(function (err) {
    //   console.log('ошибка', err);
    // })
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