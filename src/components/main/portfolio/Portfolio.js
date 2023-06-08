import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="aboutMe__header-portfolio">Портфолио</h2>

      <div className="aboutMe__list-portfolio">
        <Link className="aboutMe__link-of-list" to='https://timabuev.github.io/how-to-learn'>
          <li className="aboutMe__list-item">
            <p className="aboutMe__list-item-p">Статичный сайт</p>
            <div className="aboutMe__list-icon"></div>
          </li>
        </Link>
        <Link className="aboutMe__link-of-list" to='https://timabuev.github.io/russian-travel'>
          <li className="aboutMe__list-item">
            <p className="aboutMe__list-item-p">Адаптивный сайт</p>
            <div className="aboutMe__list-icon"></div>
          </li>
        </Link>
        <Link className="aboutMe__link-of-list" to='https://timabuev.github.io/mesto'>
          <li className="aboutMe__list-item">
            <p className="aboutMe__list-item-p">Одностраничное приложение</p>
            <div className="aboutMe__list-icon"></div>
          </li>
        </Link>
      </div>

    </section>
  )
}
export default Portfolio;