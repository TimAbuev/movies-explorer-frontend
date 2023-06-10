function SearchForm() {
  return (
    <section className="searchForm">
      
      <div className="searchForm__container-for-input">
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button className="searchForm__button-find"></button>
      </div>

      <div className="searchForm__container-for-checkbox">
        <input className="searchForm__checkbox" type="checkbox" id="short-movies-checkbox" />
        <label className="searchForm__checkbox-label" for="short-movies-checkbox">Короткометражки</label>
      </div>

      <div className="searchForm__decorate-line"></div>

    </section >
  );
}
export default SearchForm;