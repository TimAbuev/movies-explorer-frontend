import Navigation from '../navigation/Navigation';
import Logo from '../logo/Logo';

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
      <Logo/>
      <h1>{headerName}</h1>
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
