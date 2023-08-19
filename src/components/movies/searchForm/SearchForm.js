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