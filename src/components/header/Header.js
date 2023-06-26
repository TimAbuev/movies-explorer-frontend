import Navigation from '../navigation/Navigation';
import Logo from '../logo/Logo';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const {
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    linkName3,
    toLink3,
    handleMenu,
    toHideAccount,
    toHideBtnLogin,
    toHideBurger
  } = props;

  function handleBurger() {
    handleMenu();
  }

  return (
    <header className="header">
      <Logo />
      <div className="header__conatainer">
        <Navigation
          linkName1={linkName1}
          toLink1={toLink1}
          linkName2={linkName2}
          toLink2={toLink2}
          linkName3={linkName3}
          toLink3={toLink3}
        />
        <Link
          className={`header__link header__link-signin ${toHideBtnLogin ? "header__link_invisible" : ''}`}
          to="/signin">
          Войти
        </Link>
        <Link
          className={`header__link ${toHideAccount ? "header__link_invisible" : ''}`}
          to="/profile">
          Аккаунт
        </Link>
      </div>
      <button
        className={`header__burger ${toHideBurger ? "header__burger_invisible" : ''}`}
        onClick={handleBurger}>
      </button>
    </header>

  );
}

export default Header;
