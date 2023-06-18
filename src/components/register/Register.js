import React from "react";
import Logo from "../logo/Logo";
import { Link } from 'react-router-dom';
import './Register.css'

function Register(props) {
  const {
    handleRegisterSubmit,
  } = props;

  const[formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  function handleOnChange(e) {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleRegisterSubmit(formValue.name, formValue.email, formValue.password);
  }

  return (
    <section className="register">
      <div className="register__top-container">
        <Logo />
        <h1 className="register__header">Добро пожаловать!</h1>
        <form className="register__form" name="register-form" onSubmit={handleSubmit}> 
          <fieldset className="register__fieldset">
            <label className="register__input-label" for="input-name">Имя</label>
            <input className="register__input" name="name" id="input-name" type="text" onChange={handleOnChange} value={formValue.name}></input>
            <span className="register__error"></span>

            <label className="register__input-label" for="input-email">E-mail</label>
            <input className="register__input" name="email" id="input-email" type="email" onChange={handleOnChange} value={formValue.email}></input>
            <span className="register__error"></span>

            <label className="register__input-label" for="input-password">Пароль</label>
            <input className="register__input" name="password" id="input-password" type="password" onChange={handleOnChange} value={formValue.password}></input>
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