import React, { useState, useEffect } from 'react';
import MoviesCard from "../moviesCard/MoviesCard";
import Preloader from '../../Preloader/Preloader';

function MoviesCardList(props) {
  const {
    moviesState,
    currentRoute,
    onMovieDelete,
    onMovieSave,
    filteredMovies,
    filteredMyMovies,
    moviesNotFound,
    myMoviesNotFound,
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
    return <Preloader isShown={true}/>
  }

  if (moviesNotFound) {
    return <div>Ничего не найдено</div>
  }

  if (myMoviesNotFound) {
    return <div>Ничего не найдено</div>
  }

  const oneOfTwoArray = currentRoute === '/movies'
    ? filteredMovies
    : filteredMyMovies // '/saved-movies'
   
  return (
    <section className="moviesCardList">
    <div className="moviesCardList__grid-container">
      {oneOfTwoArray.slice(0, moviesToShow).map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            movie={movie}
            currentRoute={currentRoute}
            onMovieDelete={onMovieDelete}
            onMovieSave={onMovieSave}
          />
        );
      })}
    </div>
      {moviesToShow < oneOfTwoArray.length && (
        <button className="moviesCardList__button" onClick={handleClickLoadMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
