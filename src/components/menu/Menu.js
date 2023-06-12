import './Menu.css';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';

function Menu(props) {
  const {
    linkName1,
    linkName2,
    linkName3,
  } = props;

  return (
    <div className="menu__wrapper">
      <section className="menu">
        <div className="menu__top-container">
          <button className="menu__close-icon"></button>
          <div className="menu__nav-container">
            <Navigation
              linkName1={linkName1}
              linkName2={linkName2}
              linkName3={linkName3}
            />
          </div>
        </div>

        <Link className="menu__link">Аккаунт</Link>
      </section>
    </div>
  );
}
export default Menu;