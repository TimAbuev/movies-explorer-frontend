import React from "react";
import validator from "validator";
import './Profile.css'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../infoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";

function Profile(props) {
  const {
    onUpdateUser,
    handleLogin,
    isOpen,
    isShown
  } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const nameRegEXp = /^(?! )(?!.* $)[A-Za-zА-Яа-яЁё\s-]+$/;

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isInputDisabled, setInputDisabled] = React.useState(true);
  const [isBtnVisible, setBtnVisible] = React.useState(true);
  const [isSaveBtnVisible, setSaveBtnVisible] = React.useState(false);


  function checkFormValidity() {
    const isNameValid = validator.matches(values.name || "", nameRegEXp);
    const isEmailValid = validator.isEmail(values.email || "");
    const isNameChanged = values.name !== currentUser.name;
    const isEmailChanged = values.email !== currentUser.email;
    return isNameValid && isEmailValid && (isNameChanged || isEmailChanged);
  };

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let error = "";

    // Валидация имени
    if (name === "name" && !nameRegEXp.test(value)) {
      error = "Имя должно содержать только латиницу, кириллицу, пробел или дефис, при этом пробел не может быть первым и последним символом";
    }    
    // Валидация электронной почты
    if (name === "email" && !validator.isEmail(value)) {
      error = "Введите корректный адрес электронной почты";
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error });
    setIsValid(checkFormValidity());    
  };

  function handleUpdate() {
    onUpdateUser({
      name: values.name,
      email: values.email,
    })
  }

  function signOut() {
    localStorage.removeItem('jwt');
    handleLogin();
  }

  function handleEdit() {
    setInputDisabled(!isInputDisabled)
    setBtnVisible(!isBtnVisible);
    setSaveBtnVisible(!isSaveBtnVisible);
  }

  return (
    <section className="profile">
      <div className="profile__top-container">
        <h1 className="profile__header">Привет, {values.name}!</h1>
        <div className='profile__container-for-input'>
          <label className='profile__label'>Имя</label>
          <input
            className='profile__input'
            name="name"
            value={values.name}
            onChange={handleChange}
            disabled={isInputDisabled}
          />
        </div>
        <span className="profile__error">{errors.name}</span>
        <div className='profile__container-for-input'>
          <label className='profile__label'>E-mail</label>
          <input
            className='profile__input'
            name="email"
            value={values.email}
            onChange={handleChange}
            disabled={isInputDisabled}
          />
        </div>
        <span className="profile__error">{errors.email}</span>
      </div>

      <div className="profile__low-container">
        <button
          className={`profile__btn-edit_visible ${isBtnVisible ? "" : "profile__btn-edit_invisible"}`}
          onClick={handleEdit}
        >Редактировать
        </button>
        <button
          className={`profile__btn-exit_visible ${isBtnVisible ? "" : "profile__btn-exit_invisible"}`}
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>

        <InfoTooltip
          isOpen={isOpen}
          text={"При обновлении профиля произошла ошибка."}
        />

        <Preloader
          isShown={isShown}
        />

        <button
          className={`profile__btn-save ${isSaveBtnVisible ? '' : 'profile__btn-save_invisible'} 
                                        ${!isValid ? 'profile__btn-save_disabled' : ''}`}
          onClick={handleUpdate}
          disabled={!isValid}
        >Сохранить
        </button>
      </div>
    </section>
  );
}
export default Profile;