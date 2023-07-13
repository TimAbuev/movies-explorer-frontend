import Checkbox from "../checkbox/Checkbox";
import { useState } from "react";

function SearchForm(props) {
  const {
    handleSetShortMovies,
    handleSetSearch,
    handleFetchMovies,
  } = props;

  const [inputState, setInputState] = useState('');

  function handlerSubmit(e) {
    e.preventDefault();
    handleSetSearch(inputState);
    handleFetchMovies();
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
        <Checkbox handleSetShortMovies={handleSetShortMovies} />
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;