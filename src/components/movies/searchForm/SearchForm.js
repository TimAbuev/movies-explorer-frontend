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
    handleSetShortMovies(checkboxState);
  }, [checkboxState]);

  useEffect(() => {
    // если saved-movies
    if (currentRoute !== '/movies') {
      setCheckboxState(false);
      setInputState('');
      handleSetSearch('');
    }
    // если movies
    else {
      if (storedInputValue !== null) {
        setInputState(storedInputValue);
        checkArrayAndGetMovies(storedInputValue);
      } else {
        setInputState('');
        handleSetSearch('');
      }
      if (storedCheckboxValue !== null) {
        setCheckboxState(storedCheckboxValue === 'true'); // Явное преобразование строки в булево значение
      } else {
        setCheckboxState(false);
      }
    }
  }, [currentRoute]);

  function checkArrayAndGetMovies(state) {
    if (moviesState.movies && moviesState.movies.length > 0) {
      handleSetSearch(state);
      console.log('Yeah!');
    }
    else {
      handleFetchMovies();
      handleSetSearch(state);
      console.log('oh no!');
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (currentRoute === '/movies') {
      checkArrayAndGetMovies(inputState);
    } else {
      handleSetSearch(inputState);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputState(value);
    if (currentRoute === '/movies') {
      localStorage.setItem('inputValue', value);
    }
    truncateInputText();
  }

  function truncateInputText() {
    const inputElement = document.querySelector('.searchForm__input');
    const maxLength = 16;
    if (inputElement.value.length > maxLength) {
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
          moviesState={moviesState}
          handleFetchMovies={handleFetchMovies}
          checkboxState={checkboxState}
          setCheckboxState={setCheckboxState}
          currentRoute={currentRoute}
        />
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;