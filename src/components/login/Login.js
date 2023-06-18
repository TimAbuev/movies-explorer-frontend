import React from "react";
import Logo from "../logo/Logo";
import { Link } from 'react-router-dom';
import './Login.css'

function Login(props) {
  const {
    handleLogInSubmit,
  } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleLogInSubmit(password, email);
  }

  return (
    <section className="login">
      <div className="login__top-container">
        <Logo />
        <h1 className="login__header">Рады видеть!</h1>
        <form className="login__form" name="login-form" onSubmit={handleSubmit}>
          <fieldset className="login__fieldset">
            <label className="login__input-label" for="input-email">E-mail</label>
            <input className="login__input" name="email" id="input-email" type="email" value={email} onChange={handleChangeEmail}></input>
            <span className="login__error"></span>

            <label className="login__input-label" for="input-password">Пароль</label>
            <input className="login__input" name="password" id="input-password" type="password" value={password} onChange={handleChangePassword}></input>
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