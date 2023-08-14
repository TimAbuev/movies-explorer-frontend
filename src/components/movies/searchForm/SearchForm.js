import Checkbox from "../checkbox/Checkbox";
import { useState, useEffect } from "react";

function SearchForm(props) {
  const {
    handleSetShortMovies,
    handleSetSearch,
    handleFetchMovies,
    shortMovies,
    moviesState,
  } = props;

  const [inputState, setInputState] = useState('');

  useEffect(() => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue) {
      setInputState(storedInputValue);
    }
  }, []);

  // ОБРАЩАЕМСЯ К СЕРВЕРУ ТОЛЬКО КОГДА МАССИВ = FALSE, Т.Е. ПРИ ПЕРВОМ ЗАПРОСЕ
  function handlerSubmit(e) {
    if (moviesState.movies && moviesState.movies.length > 0) {
      e.preventDefault();
      handleSetSearch(inputState);
      localStorage.setItem('inputValue', inputState);
    }
    else {
      e.preventDefault();
      handleSetSearch(inputState);
      handleFetchMovies();
      localStorage.setItem('inputValue', inputState);
    }

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
        <Checkbox handleSetShortMovies={handleSetShortMovies} shortMovies={shortMovies} />
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;