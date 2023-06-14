import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList(props) {
  const {
    btnType
  } = props;


  return (
    <section className="moviesCardList">
      <div className="moviesCardList__grid-container">
        <MoviesCard btnType={btnType}/>
        <MoviesCard btnType={btnType}/>
        <MoviesCard btnType={btnType}/>
        <MoviesCard btnType={btnType}/>
        <MoviesCard btnType={btnType}/>
        <MoviesCard btnType={btnType}/>

      </div>
      <button className="moviesCardList__button">Ещё</button>
    </section>
  );
}
export default MoviesCardList;