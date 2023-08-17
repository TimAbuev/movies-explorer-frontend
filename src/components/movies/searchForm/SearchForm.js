import Checkbox from "../checkbox/Checkbox";
import { useState, useEffect } from "react";

function SearchForm(props) {
  const {
    handleSetShortMovies,
    handleSetSearch,
    handleFetchMovies,
    shortMovies,
    moviesState,
    currentRoute,
  } = props;

  const [inputState, setInputState] = useState('');

  useEffect(() => {
    if (currentRoute === '/movies') {
      const storedInputValue = localStorage.getItem('inputValue');
      if (storedInputValue) {
        setInputState(storedInputValue);
        handleSetSearch(storedInputValue);
        handleFetchMovies();
        console.log(`выполнился useEffect ${storedInputValue}`);
      }
    } else {
      console.log('myMoviesPage');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlerSubmit(e) {
    e.preventDefault();
    localStorage.setItem('inputValue', inputState);

    currentRoute === '/movies'
      ? handlerSubmitForMoviesRoute()
      : handlerSubmitForMyMoviesRoute()
  }

  function handlerSubmitForMoviesRoute() {
    if (moviesState.movies && moviesState.movies.length > 0) {
      handleSetSearch(inputState);
      console.log('Yeah!');
    }
    else {
      handleFetchMovies();
      handleSetSearch(inputState);
      console.log('oh no!');
    }
  }

  function handlerSubmitForMyMoviesRoute() {
    console.log('its handlerSubmitForMyMoviesRoute !!');
    handleSetSearch(inputState);
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputState(value);
  }

  return (
    <section className="searchForm">

      <form className="searchForm__container-for-input" onSubmit={handlerSubmit}>
        <input
          className="searchForm__input"
          placeholder="Фильм"
          minLength="2"
          maxLength="17"
          onChange={handleChange}
          value={inputState}
        />
        <button
          className="searchForm__button-find"
          type="submit"
        >
        </button>
        <div className="searchForm__decorate-vertical-line"></div>
        <div className="searchForm__decorate-loupe"></div>
      </form>
      <div className="searchForm__container-for-checkbox">
        <Checkbox 
        handleSetShortMovies={handleSetShortMovies} 
        shortMovies={shortMovies} 
        moviesState={moviesState}
        handleFetchMovies={handleFetchMovies}
        />
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;