import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img className="logo__img" src={logo} alt="логотип" />
    </Link>
  );
}
export default Logo;