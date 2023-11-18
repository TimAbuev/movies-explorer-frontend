import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const {
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    toClose
  } = props;

  return (
    <nav className="navigation">
      <NavLink
        to={toLink1}
        className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
        onClick={toClose}
      >
        {linkName1}
      </NavLink>
      <NavLink
        to={toLink2}
        className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
        onClick={toClose}
      >
        {linkName2}
      </NavLink>
    </nav>
  );

}

export default Navigation;