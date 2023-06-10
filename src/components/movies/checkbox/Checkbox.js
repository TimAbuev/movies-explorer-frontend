import './Checkbox.css';

function Checkbox() {
  return (
    <div className="searchForm__container-for-checkbox">
      <input className="searchForm__checkbox" type="checkbox" id="short-movies-checkbox" />
      <label className="searchForm__checkbox-label" for="short-movies-checkbox">Короткометражки</label>
    </div>
  )
}
export default Checkbox;