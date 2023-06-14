import Navigation from '../navigation/Navigation';
import Logo from '../logo/Logo';
import './Header.css';

function Header(props) {
  const {
    linkName1,
    toLink1,
    linkName2,
    toLink2,
    linkName3,
    toLink3,
  } = props;

  return (
    <header className="header">
      <Logo/>
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
