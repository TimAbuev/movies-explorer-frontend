import Checkbox from "../checkbox/Checkbox";

function SearchForm() {
  return (
    <section className="searchForm">

      <div className="searchForm__container-for-input">
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button className="searchForm__button-find"></button>
      </div>
      <Checkbox></Checkbox>
      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;