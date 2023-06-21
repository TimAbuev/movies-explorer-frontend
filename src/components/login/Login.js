import React from "react";
import validator from "validator";
import Logo from "../logo/Logo";
import { Link } from 'react-router-dom';
import './Login.css'

function Login(props) {
  const {
    handleLogInSubmit,
  } = props;

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleLogInSubmit(values.password, values.email);
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

    // Валидация пароля
    // if (name === "password" && !validator.isLength(value, { min: 8 })) {
    //   error = "Пароль должен содержать не менее 8 символов";
    // }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error });
    setIsValid(target.closest("form").checkValidity());
  };

  // const resetForm = useCallback(
  //   (newValues = {}, newErrors = {}, newIsValid = false) => {
  //     setValues(newValues);
  //     setErrors(newErrors);
  //     setIsValid(newIsValid);
  //   },
  //   [setValues, setErrors, setIsValid]
  // );

  return (
    <section className="login">
      <div className="login__top-container">
        <Logo />
        <h1 className="login__header">Рады видеть!</h1>
        <form className="login__form" name="login-form" onSubmit={handleSubmit}>
          <fieldset className="login__fieldset">
            <label className="login__input-label" for="input-email">E-mail</label>
            <input className="login__input"
              name="email"
              id="input-email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <span className="login__error">{errors.email}</span>

            <label className="login__input-label" for="input-password">Пароль</label>
            <input className="login__input"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              required
              minLength="8"
            />
            <span className="login__error">{errors.password}</span>

          </fieldset>
          <button
            className={`login__button ${!isValid ? "login__button_disabled" : ""}`}
            type="submit"
            disabled={!isValid}>
            Войти
          </button>
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