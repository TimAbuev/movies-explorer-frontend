import Checkbox from "../checkbox/Checkbox";
import { useState, useEffect } from "react";

function SearchForm(props) {
  const {
    handleSetShortMovies,
    handleSetSearch,
    handleFetchMovies,
    moviesState,
    currentRoute,
  } = props;

  const [inputState, setInputState] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);
  const storedInputValue = localStorage.getItem('inputValue');
  const storedCheckboxValue = localStorage.getItem('checkbox');

  useEffect(() => {
    if (currentRoute === '/movies') {
      if (storedInputValue) {
        setInputState(storedInputValue);
        checkArrayAndGetMovies(storedInputValue);
        console.log(`выполнился useEffect ${storedInputValue}`);
      }
      if (storedCheckboxValue === 'true') {
        setCheckboxState(storedCheckboxValue);
        console.log('/movies if storedCheckboxValue');
      }
    }
    else {
      setInputState('');
      setCheckboxState(false);
      handleSetSearch('');
      console.log('myMoviesPage');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoute]);

  function checkArrayAndGetMovies(trueOrfalse) {
    if (moviesState.movies && moviesState.movies.length > 0) {
      handleSetSearch(trueOrfalse);
      console.log('Yeah!');
    }
    else {
      handleFetchMovies();
      handleSetSearch(trueOrfalse);
      console.log('oh no!');
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();

    if (currentRoute === '/movies') {
      localStorage.setItem('inputValue', inputState);
    }
    checkArrayAndGetMovies(inputState);
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputState(value);
    truncateInputText();
  }

  function truncateInputText() {
    const inputElement = document.querySelector('.searchForm__input');
    const maxLength = 16;
    if (inputElement.value.length > maxLength) {
      console.log('where????');
      inputElement.classList.add('searchForm__input_extra');
    } else {
      inputElement.classList.remove('searchForm__input_extra');
    }
  }

  return (
    <section className="searchForm">

      <form className="searchForm__container-for-input" onSubmit={handlerSubmit}>
        <input
          className="searchForm__input"
          placeholder="Фильм"
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
          moviesState={moviesState}
          handleFetchMovies={handleFetchMovies}
          checkboxState={checkboxState}
          setCheckboxState={setCheckboxState}
          storedCheckboxValue={storedCheckboxValue}
          currentRoute={currentRoute}
        />
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;