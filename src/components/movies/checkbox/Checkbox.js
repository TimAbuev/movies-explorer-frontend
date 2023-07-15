import './Checkbox.css';

function Checkbox(props) {
  const {
    handleSetShortMovies,
    shortMovies,
  } = props;

  return (
    <>
      <input
        className="сheckbox__checkbox"
        type="checkbox" id="short-movies-checkbox"
        onChange={handleSetShortMovies}
        checked={shortMovies}
      />
      <label className="сheckbox__checkbox-label" htmlFor="short-movies-checkbox">Короткометражки</label>
    </>
  )
}
export default Checkbox;