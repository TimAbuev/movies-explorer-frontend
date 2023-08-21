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
  // const storedInputValue = localStorage.getItem('inputValue');
  const storedCheckboxValue = localStorage.getItem('checkbox');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      handleSetShortMovies(checkboxState);
      console.log(`checkboxState=${checkboxState}`);
      console.log(`storedCheckboxValue=${storedCheckboxValue}`);
    }
  }, [checkboxState]);

  useEffect(() => {
    if (currentRoute !== '/movies') {
      setCheckboxState(false);
      console.log(`test we changed currentRoute and now on /saved-movies`);
    } else {
      checkArrayAndGetMovies();

      if (storedCheckboxValue !== null) {
        setCheckboxState(storedCheckboxValue === 'true'); // Явное преобразование строки в булево значение
        console.log(`test we changed checkboxState and now on /movies + storedCheckboxValue=${storedCheckboxValue}`);
        console.log(`test we changed checkboxState and now on /movies`);
      } else {
        setCheckboxState(false);
        console.log(`test we changed currentRoute and now on /movies  storedCheckboxValue DON'T EXIST`);
      }
    }
  }, [currentRoute]);

  function checkArrayAndGetMovies() {
    if (moviesState.movies && moviesState.movies.length > 0) {
      // handleSetSearch(state);
      console.log('Yeah!');
    }
    else {
      handleFetchMovies();
      // handleSetSearch(state);
      console.log('oh no!');
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();

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