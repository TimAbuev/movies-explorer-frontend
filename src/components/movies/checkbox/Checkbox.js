import './Checkbox.css';

function Checkbox() {
  return (
    <>
      <input className="сheckbox__checkbox" type="checkbox" id="short-movies-checkbox" />
      <label className="сheckbox__checkbox-label" for="short-movies-checkbox">Короткометражки</label>
    </>
  )
}
export default Checkbox;