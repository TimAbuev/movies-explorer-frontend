import './Checkbox.css';
import { useState, useEffect } from "react";

function Checkbox(props) {
  const {
    handleSetShortMovies,
    moviesState,
    handleFetchMovies,
    checkboxState,
    setCheckboxState,
    storedCheckboxValue,
    currentRoute,
  } = props;

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (storedCheckboxValue === "true") {
      setCheckboxState(true);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      handleSetShortMovies(checkboxState);

      if (moviesState.movies && moviesState.movies.length > 0) {
        console.log(`сработал useEffect checkbox if`);
      } else {
        handleFetchMovies();
        console.log(`сработал useEffect checkbox else`);
      }
    }
  }, [checkboxState]);

  function handleChange(e) {
    const value = e.target.checked;
    setCheckboxState(value);

    if (currentRoute === '/movies') {
      localStorage.setItem('checkbox', value);
    }
  }

  return (
    <>
      <input
        className="сheckbox__checkbox"
        type="checkbox" id="short-movies-checkbox"
        onChange={handleChange}
        checked={checkboxState}
      />
      <label className="сheckbox__checkbox-label" htmlFor="short-movies-checkbox">Короткометражки</label>
    </>
  )
}

export default Checkbox;
