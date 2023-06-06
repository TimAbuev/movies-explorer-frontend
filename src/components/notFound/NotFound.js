import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-section__container">
        <p className="not-found-section__404">404</p>
        <p className="not-found-section__line">Страница не найдена</p>
        
      </div>
      <Link to="/" className="not-found-section__go-back">Назад</Link>
    </section>
  );
}

export default NotFound;