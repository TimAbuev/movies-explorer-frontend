import React, { useState, useEffect } from 'react';
import MoviesCard from "../moviesCard/MoviesCard";
import { useMovies } from '../../hooks/useMovies';

function MoviesCardList(props) {
  const { btnType } = props;
  const { state } = useMovies();
  const [moviesToShow, setMoviesToShow] = useState(getInitialMoviesToShow());

  useEffect(() => {
    function handleResize() {
      setMoviesToShow(getInitialMoviesToShow());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getInitialMoviesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 12;
    } else if (screenWidth >= 768) {
      return 8;
    } else if (screenWidth >= 320) {
      return 5;
    }
    return 12; // Default to 12 for unknown screen widths
  }

  function getMoviesToAdd() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else if (screenWidth >= 320) {
      return 2;
    }
    return 3; // Default to 3 for unknown screen widths
  }

  const handleClickLoadMore = () => {
    setMoviesToShow((prevMoviesToShow) => prevMoviesToShow + getMoviesToAdd());
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
      {moviesToShow < state.movies.length && (
        <button className="moviesCardList__button" onClick={handleClickLoadMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
