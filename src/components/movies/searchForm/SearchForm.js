import Checkbox from "../checkbox/Checkbox";

function SearchForm() {
  return (
    <section className="searchForm">

      <div className="searchForm__container-for-input">
        <input className="searchForm__input" placeholder="Фильм" />
        <button className="searchForm__button-find"></button>
        <div className="searchForm__decorate-vertical-line"></div>
      </div>
      <div className="searchForm__container-for-checkbox">
        <Checkbox></Checkbox>
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;