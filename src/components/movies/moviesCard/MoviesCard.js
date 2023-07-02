import { useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard(props) {
  const {
    movie,
    onCreateMovie,
    handleClickBtnMovie,
    btnType,
    isMovieSaved
  } = props;


  // function handleClickBtnSave() {
  //   // setIsClicked(true);
  //   onCreateMovie(movie);
  //   console.log('click on handleClickBtnSave');
  // }

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
        className={`${isMovieSaved ? 'moviesCard__button_clicked' : `moviesCard__button-to-${btnType}`}`}
        // className={`moviesCard__button-to-${btnType}`}
        onClick={handleClickBtnMovie}
        // disabled={isClicked ? true : false}
      >

      </button>

      {/* <button className="moviesCard__button moviesCard__button_type_active"></button>
      <button className="moviesCard__button moviesCard__button_type_to-close"></button> */}

    </div>
  );
}
export default MoviesCard;