import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from './navigation/Navigation';

function Header(props) {
  const {
    headerName,
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    linkName3,
    toLink3,
  } = props;

  return (
    <header className="header">
      <h1>{headerName}</h1>
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="логотип" />
      </Link>
      <Navigation
        linkName1={linkName1}
        toLink1={toLink1}
        linkName2={linkName2}
        toLink2={toLink2}
        linkName3={linkName3}
        toLink3={toLink3}
      />
    </header>

  );
}

export default Header;
