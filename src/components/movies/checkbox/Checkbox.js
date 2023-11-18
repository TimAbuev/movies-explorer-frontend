import './Checkbox.css';

function Checkbox(props) {
  const {
    moviesState,
    handleFetchMovies,
    checkboxState,
    setCheckboxState,
    currentRoute,
  } = props;

  function handleChange(e) {
    const value = e.target.checked;
    setCheckboxState(value);
    if (currentRoute === '/movies') {
      localStorage.setItem('checkbox', value);
      
      if (!(moviesState.movies && moviesState.movies.length > 0)) {
        handleFetchMovies();
      }
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
