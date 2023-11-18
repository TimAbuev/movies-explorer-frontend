import './Menu.css';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';

function Menu(props) {
  const {
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    toClose,
    isOpen, 
  } = props;

  return (
    <div className={`wrapper-menu ${isOpen ? 'wrapper-menu_open' : ''}`}>
      <section className="menu">
        <div className="menu__top-container">
          <button className="menu__close-icon" onClick={toClose}></button>
          <div className="menu__nav-container">
            <Link className="menu__link" to="/" onClick={toClose}>Главная</Link>
            <Navigation
              linkName1={linkName1}
              toLink1={toLink1}
              linkName2={linkName2}
              toLink2={toLink2}
              toClose={toClose}
            />
          </div>
        </div>

        <Link className="menu__link-account" to="/profile" onClick={toClose}>Аккаунт</Link>
      </section>
    </div>
  );
}
export default Menu;