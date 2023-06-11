import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const {
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    linkName3,
    toLink3,
  } = props;

  return (
    <nav className="navigation">
      <NavLink to={toLink1} className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>{linkName1}</NavLink>
      <NavLink to={toLink2} className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>{linkName2}</NavLink>
      <NavLink to={toLink3} className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>{linkName3}</NavLink>
    </nav>
  );

}

export default Navigation;