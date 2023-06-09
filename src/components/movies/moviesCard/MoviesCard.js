function MoviesCard() {
  return (
    <div className="moviesCard">
      <div className="moviesCard__text-container">
        <p className="moviesCard__name">В погоне за Бенкси</p>
        <p className="moviesCard__duration">27 минут</p>
      </div>
      <iframe className="moviesCard__iframe" src="https://www.youtube.com/embed/GVV06jTYjeY"
        title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      {/* <button className="moviesCard__button moviesCard__button_disabled">Сохранить</button> */}
      <button className="moviesCard__button moviesCard__button_active"></button>
    </div>
  );
}
export default MoviesCard;