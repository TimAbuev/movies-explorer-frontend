import { useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard(props) {
  const {
    btnType,
    movie,
  } = props;

  const [isClicked, setIsClicked] = useState(false);

  function handleClickBtnSave() {
    setIsClicked(!isClicked);
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

      {/* <iframe className="moviesCard__iframe" src="https://www.youtube.com/embed/GVV06jTYjeY"
        title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe> */}

      <button
        className={`moviesCard__button ${isClicked ? "moviesCard__button_type_active" : ""}`}
        moviesCard__button_type_disabled
        onClick={handleClickBtnSave}
      >
        Сохранить
      </button>

      {/* <button className="moviesCard__button moviesCard__button_type_active"></button>
      <button className="moviesCard__button moviesCard__button_type_to-close"></button> */}

    </div>
  );
}
export default MoviesCard;