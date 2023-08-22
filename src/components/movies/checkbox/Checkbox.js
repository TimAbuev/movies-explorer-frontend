import './Checkbox.css';
// import { useState, useEffect } from "react";

function Checkbox(props) {
  const {
    // handleSetShortMovies,
    // moviesState,
    // handleFetchMovies,
    checkboxState,
    setCheckboxState,
    // storedCheckboxValue,
    currentRoute,
  } = props;

  function handleChange(e) {
    const value = e.target.checked;
    setCheckboxState(value);
    if (currentRoute === '/movies') {
      localStorage.setItem('checkbox', value);
      console.log('data checkbox to localStorage by handleChange');
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
