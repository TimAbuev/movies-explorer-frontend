import React from "react";
import './Profile.css'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const {
    onUpdateUser,
    handleLogin
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  //Выставляем в поля текущие значения
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleEdit() {
    onUpdateUser({
      name: name,
      email: email,
    });
  }

  function signOut() {
    localStorage.removeItem('jwt');
    handleLogin();
  }

  return (
    <section className="profile">
      <div className="profile__top-container">
        <h1 className="profile__header">Привет, {name}!</h1>
        <div className='profile__container-for-input'>
          <label className='profile__label'>Имя</label>
          <input className='profile__input' placeholder="Виталий" value={name || ''} onChange={handleChangeName}></input>
        </div>
        <span className="profile__error">Проба 1</span>
        <div className='profile__container-for-input'>
          <label className='profile__label'>E-mail</label>
          <input className='profile__input' placeholder="pochta@yandex.ru" value={email || ''} onChange={handleChangeEmail}></input>
        </div>
        <span className="profile__error">Проба 2</span>
      </div>

      <div className="profile__low-container">
        <button className='profile__btn-edit' onClick={handleEdit}>Редактировать</button>
        <button className='profile__btn-exit' onClick={signOut}>Выйти из аккаунта</button>
      </div>
    </section>
  );
}
export default Profile;