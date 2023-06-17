import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>

      <ul className="portfolio__list">
        <Link className="portfolio__link-of-list" to='https://timabuev.github.io/how-to-learn'>
          <li className="portfolio__list-item">
            <p className="portfolio__list-item-p">Статичный сайт</p>
            <div className="portfolio__list-icon"></div>
          </li>
        </Link>
        <Link className="portfolio__link-of-list" to='https://timabuev.github.io/russian-travel'>
          <li className="portfolio__list-item">
            <p className="portfolio__list-item-p">Адаптивный сайт</p>
            <div className="portfolio__list-icon"></div>
          </li>
        </Link>
        <Link className="portfolio__link-of-list" to='https://timabuev.github.io/mesto'>
          <li className="portfolio__list-item">
            <p className="portfolio__list-item-p">Одностраничное приложение</p>
            <div className="portfolio__list-icon"></div>
          </li>
        </Link>
      </ul>

    </section>
  )
}
export default Portfolio;