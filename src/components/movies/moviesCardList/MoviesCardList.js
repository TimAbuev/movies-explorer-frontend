import MoviesCard from "../moviesCard/MoviesCard";
import { useMovies } from '../../hooks/useMovies';

function MoviesCardList(props) {
  const { btnType } = props;
  const { state } = useMovies();

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__grid-container">
        {state.movies.map((movie) => (
          <MoviesCard key={movie._id} movie={movie} btnType={btnType} />
        ))}
      </div>
      <button className="moviesCardList__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
