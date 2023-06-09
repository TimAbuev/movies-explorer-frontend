function NavTab() {
  return (
    <nav className="NavTab">
      <a href="#abPro" className="NavTab__link">
        <p className="NavTab__link-text">О проекте</p>
      </a>
      <a href="#techs" className="NavTab__link">
        <p className="NavTab__link-text">Технологии</p>
      </a>
      <a href="#abMe" className="NavTab__link">
        <p className="NavTab__link-text">Студент</p>
      </a>
    </nav>
  );
}
export default NavTab;