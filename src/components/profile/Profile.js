import React from "react";
import validator from "validator";
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import InfoTooltip from "../infoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";

function Profile(props) {
  const {
    onUpdateUser,
    isOpen,
    isShown,
    currentUser,
    isSuccessToolTipOpen,
  } = props;

  const nameRegEXp = /^(?! )(?!.* $)[A-Za-zА-Яа-яЁё\s-]+$/;

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isInputDisabled, setInputDisabled] = React.useState(true);
  const [isBtnVisible, setBtnVisible] = React.useState(true);
  const [isSaveBtnVisible, setSaveBtnVisible] = React.useState(false);
  const navigate = useNavigate();

  let isNameChanged = false;
  let isEmailChanged = false;

  React.useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
    }
  }, [currentUser]);

  function checkFormValidity() {
    const isNameValid = validator.matches(values.name || "", nameRegEXp);
    const isEmailValid = validator.isEmail(values.email || "");

    return isNameValid && isEmailValid && isNameChanged && isEmailChanged;
  };

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let error = "";

    // выводим ошибку для поля имени в случае, если оно не прошлло валидацию регулярным выражением
    if (name === "name" && !nameRegEXp.test(value)) {
      error = "Имя должно содержать только латиницу, кириллицу, пробел или дефис, при этом пробел не может быть первым и последним символом";
    }
    // имя нельзя сохранить, если оно совпадает с текущим
    else {
      isNameChanged = value !== currentUser.name;
      console.log(`isNameChanged = ${isNameChanged}`);
      console.log(`value = ${value}`);
      console.log(`currentUser.name = ${currentUser.name}`);
    }
    // выводим ошибку для поля мыла в случае, если оно не прошлло валидацию регулярным выражением
    if (name === "email" && !validator.isEmail(value)) {
      error = "Введите корректный адрес электронной почты";
    }
    // мыло нельзя сохранить, если оно совпадает с текущим
    else {
      isEmailChanged = value !== currentUser.email
      console.log(`isEmailChanged = ${isEmailChanged}`);
      console.log(`value = ${value}`);
      console.log(`currentUser.email = ${currentUser.email}`);
    }

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
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
    localStorage.clear();
    navigate('/');
    window.location.reload();
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

        <InfoTooltip
          isSuccessToolTipOpen={isSuccessToolTipOpen}
          text={"Изменения были успешно внесены"}
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