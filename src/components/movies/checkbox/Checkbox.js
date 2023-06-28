import './Checkbox.css';
import { useMovies } from '../../hooks/useMovies';

function Checkbox() {
  const { shortMovies, handleSetShortMovies } = useMovies();

  return (
    <>
      <input
        className="сheckbox__checkbox"
        type="checkbox" id="short-movies-checkbox"
        checked={shortMovies}
        onChange={handleSetShortMovies}
      />
      <label className="сheckbox__checkbox-label" for="short-movies-checkbox">Короткометражки</label>
    </>
  )
}
export default Checkbox;