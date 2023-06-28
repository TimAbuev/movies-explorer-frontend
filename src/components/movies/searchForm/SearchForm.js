import Checkbox from "../checkbox/Checkbox";

function SearchForm() {

  return (
    <section className="searchForm">

      <form className="searchForm__container-for-input">
        <input className="searchForm__input" placeholder="Фильм" minLength="2" maxLength="17" required/>
        <button className="searchForm__button-find" type="submit"></button>
        <div className="searchForm__decorate-vertical-line"></div>
        <div className="searchForm__decorate-loupe"></div>
      </form>
      <div className="searchForm__container-for-checkbox">
        <Checkbox></Checkbox>
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;