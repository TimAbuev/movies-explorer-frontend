import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <section className="not-found-section">
      <div className="not-found-section__container">
        <p className="not-found-section__404">404</p>
        <p className="not-found-section__line">Страница не найдена</p>
        
      </div>
      <button className="not-found-section__go-back" onClick={() => navigate(-1)}>Go Back</button>
      
    </section>
  );
}

export default NotFound;