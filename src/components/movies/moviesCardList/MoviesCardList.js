import React, { useState, useEffect } from 'react';
import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList (props) {
  const {
    moviesState,
    keyOfObject,
  } = props;

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

  if (moviesState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__grid-container">
        {moviesState[keyOfObject].slice(0, moviesToShow).map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>
      {moviesToShow < moviesState[keyOfObject].length && (
        <button className="moviesCardList__button" onClick={handleClickLoadMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
