import React from "react";
// import {useCallback} from "react";
import validator from "validator";
import Logo from "../logo/Logo";
import { Link } from 'react-router-dom';
import './Register.css'

function Register(props) {
  const {
    handleRegisterSubmit,
  } = props;

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleRegisterSubmit(values.name, values.email, values.password);
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let error = "";

    // Валидация электронной почты
    if (name === "email" && !validator.isEmail(value)) {
      error = "Введите корректный адрес электронной почты";
    }

    // Валидация имени
    if (name === "name" && !/^[A-Za-zА-Яа-яЁё\s-]+$/.test(value)) {
      error = "Имя должно содержать только латиницу, кириллицу, пробел или дефис";
    }

    // Валидация пароля
    if (name === "password" && !validator.isLength(value, { min: 8 })) {
      error = "Пароль должен содержать не менее 8 символов";
    }


    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error });
    setIsValid(target.closest("form").checkValidity());

  };

  return (
    <section className="register">
      <div className="register__top-container">
        <Logo />
        <h1 className="register__header">Добро пожаловать!</h1>
        <form className="register__form" name="register-form" onSubmit={handleSubmit}>
          <fieldset className="register__fieldset">
            <label className="register__input-label" for="input-name">Имя</label>
            <input
              className="register__input"
              name="name"
              id="input-name"
              type="text"
              onChange={handleChange}
              value={values.name}
              required
              minLength="2"
            />
            <span className="register__error" name="label-name">{errors.name}</span>

            <label className="register__input-label" for="input-email">E-mail</label>
            <input
              className="register__input"
              name="email"
              id="input-email"
              type="email"
              onChange={handleChange}
              value={values.email}
              required
            />
            <span className="register__error" name="label-email">{errors.email}</span>

            <label className="register__input-label" for="input-password">Пароль</label>
            <input
              className={`register__input`}
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              required
              minLength="8"
            />
            <span className="register__error" name="label-password">{errors.password}</span>
          </fieldset>
          <button
            className={`register__button ${!isValid ? "register__button_disabled" : ""}`}
            type="submit"
            disabled={!isValid}>
            Зарегистрироваться
          </button>
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