import React, { useState } from 'react';
import MoviesCard from "../moviesCard/MoviesCard";
import { useMovies } from '../../hooks/useMovies';

function MoviesCardList(props) {
  const { btnType } = props;
  const { state } = useMovies();
  const [moviesToShow, setMoviesToShow] = useState(12);

  const handleClickLoadMore = () => {
    setMoviesToShow((prevMoviesToShow) => prevMoviesToShow + 3);
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__grid-container">
        {state.movies.slice(0, moviesToShow).map((movie) => (
          <MoviesCard key={movie._id} movie={movie} btnType={btnType} />
        ))}
      </div>
      <button className="moviesCardList__button" onClick={handleClickLoadMore}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
