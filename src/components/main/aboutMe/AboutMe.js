import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__header-student">Студент</h2>
      <div className="aboutMe__decorate"></div>
      <div className="aboutMe__container">
        <img className="aboutMe__avatar" alt="student's face"></img>
        <article className="aboutMe__biography">
          <h3 className="aboutMe__header-name">Тимур</h3>
          <h4 className="aboutMe__profession">Фронтенд-разработчик, 29 лет</h4>
          <p className="aboutMe__paragraph">Я родился и живу в Саратове,
            закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
            а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link to='https://github.com/TimAbuev'>Github</Link>
        </article>
        <article className="aboutMe__portfolio">
          <h4 className="aboutMe__header-portfolio">Портфолио</h4>
          <ul className="aboutMe__list-portfolio">
            <Link to='https://timabuev.github.io/how-to-learn'>
              <li className="aboutMe__list-item">
                Статичный сайт
                <div className="aboutMe__list-icon"></div>
              </li>
            </Link>
            <Link to='https://timabuev.github.io/russian-travel'>
              <li className="aboutMe__list-item">
                Адаптивный сайт
                <div className="aboutMe__list-icon"></div>
              </li>
            </Link>
            <Link to='https://timabuev.github.io/mesto'>
              <li className="aboutMe__list-item">
              Одностраничное приложение
                <div className="aboutMe__list-icon"></div>
              </li>
            </Link>

          </ul>
        </article>
      </div>
    </section>
  );
}
export default AboutMe;