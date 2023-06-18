import React from "react";
import Logo from "../logo/Logo";
import { Link } from 'react-router-dom';
import './Register.css'

function Register(props) {
  const {
    handleRegisterSubmit,
  } = props;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleRegisterSubmit(name, email, password);
  }

  return (
    <section className="register">
      <div className="register__top-container">
        <Logo />
        <h1 className="register__header">Добро пожаловать!</h1>
        <form className="register__form" name="register-form" onSubmit={handleSubmit}> 
          <fieldset className="register__fieldset">
            <label className="register__input-label" for="input-name">Имя</label>
            <input className="register__input" name="name" id="input-name" type="text" onChange={handleChangeName} value={name}></input>
            <span className="register__error"></span>

            <label className="register__input-label" for="input-email">E-mail</label>
            <input className="register__input" name="email" id="input-email" type="email" onChange={handleChangeEmail} value={email}></input>
            <span className="register__error"></span>

            <label className="register__input-label" for="input-password">Пароль</label>
            <input className="register__input" name="password" id="input-password" type="password" onChange={handleChangePassword} value={password}></input>
            <span className="register__error">Что-то пошло не так...</span>
          </fieldset>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
      </div>

      <div className="register__low-container">
        <p className="register__text-link">Уже зарегистрированы?</p>
        <Link className="register__link" to="/signin">Войти</Link>
      </div>
    </section>
  );
}
export default Register;