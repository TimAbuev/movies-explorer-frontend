import Logo from "../logo/Logo";
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <section className="login">
      <div className="login__top-container">
        <Logo />
        <h1 className="login__header">Рады видеть!</h1>
        <form className="login__form" name="login-form">
          <fieldset className="login__fieldset">
            <label className="login__input-label" for="input-email">E-mail</label>
            <input className="login__input" name="email" id="input-email" type="email"></input>
            <span className="login__error"></span>
            <label className="login__input-label" for="input-password">Пароль</label>
            <input className="login__input" name="password" id="input-password" type="password"></input>
            <span className="login__error"></span>
          </fieldset>
          <button className="login__button" type="submit">Войти</button>
        </form>
      </div>

      <div className="login__low-container">
        <p className="login__text-link">Ещё не зарегистрированы?</p>
        <Link className="login__link" to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}
export default Login;