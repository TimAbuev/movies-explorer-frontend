import './Menu.css';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';

function Menu(props) {
  const {
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    linkName3,
    toLink3,
    toClose,
    isOpen
  } = props;

  return (
    <div className={`menu__wrapper ${isOpen ? 'menu__wrapper_open' : ''}`}>
      <section className="menu">
        <div className="menu__top-container">
          <button className="menu__close-icon" onClick={toClose}></button>
          <div className="menu__nav-container">
            <Link className="menu__link" to="/">Главая</Link>
            <Navigation
              linkName1={linkName1}
              toLink1={toLink1}
              linkName2={linkName2}
              toLink2={toLink2}
              linkName3={linkName3}
              toLink3={toLink3}
            />
          </div>
        </div>

        <Link className="menu__link-account" to="/profile">Аккаунт</Link>
      </section>
    </div>
  );
}
export default Menu;