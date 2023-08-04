import { Link } from 'react-router-dom';
import photo from '../../../images/photo.jpg'

function AboutMe() {
  return (
    <section className="aboutMe" id="abMe">
      <h2 className="aboutMe__header">Студент</h2>
      <div className="aboutMe__decorate"></div>

      <div className="aboutMe__container">
        <img className="aboutMe__photo" alt="student's face" src={photo} />
        <article className="aboutMe__biography">
          <h3 className="aboutMe__header-name">Тимур</h3>
          <h4 className="aboutMe__profession">Фронтенд-разработчик, 29 лет</h4>
          <p className="aboutMe__paragraph">Большую сознательную жизнь прожил в Выборге и Санкт-Петербурге. 
          Увлекаюсь DAW Fl Studio и гитарой, английским языком.</p>
          <Link className="aboutMe__link-github" to='https://github.com/TimAbuev'>Github</Link>
        </article>
      </div>

    </section>
  );
}
export default AboutMe;