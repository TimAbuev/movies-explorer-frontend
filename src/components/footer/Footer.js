import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__decorate"></div>
      <div className='footer__flex-container'>
        <div className='footer__flex-links-container'>
          <Link to="https://practicum.yandex.ru" className='footer__link'>Яндекс.Практикум</Link>
          <Link to="https://github.com" className='footer__link'>Github</Link>
        </div>
        <p className="footer__year">©{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;