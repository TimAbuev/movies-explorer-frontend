import { Link } from 'react-router-dom';
import photo from '../../../images/photo.jpg'

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__header-student">Студент</h2>
      <div className="aboutMe__decorate"></div>

      <div className="aboutMe__container">
        <img className="aboutMe__photo" alt="student's face" src={photo} />
        <article className="aboutMe__biography">
          <h3 className="aboutMe__header-name">Тимур</h3>
          <h4 className="aboutMe__profession">Фронтенд-разработчик, 29 лет</h4>
          <p className="aboutMe__paragraph">Я родился и живу в Саратове,
            закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
            а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link className="aboutMe__link-github" to='https://github.com/TimAbuev'>Github</Link>
        </article>
      </div>
      
    </section>
  );
}
export default AboutMe;