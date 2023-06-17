import './Profile.css'

function Profile() {
  return (
    <section className="profile">
      <div className="profile__top-container">
        <h1 className="profile__header">Привет, Виталий!</h1>
        <div className='profile__container-for-input'> 
          <label className='profile__label'>Имя</label>
          <input className='profile__input' placeholder='Виталий'></input>
        </div>
        <div className='profile__container-for-input'> 
          <label className='profile__label'>E-mail</label>
          <input className='profile__input' placeholder='pochta@yandex.ru'></input>
        </div>
      </div>

      <div className="profile__low-container">
        <button className='profile__btn-edit'>Редактировать</button>
        <button className='profile__btn-exit'>Выйти из аккаунта</button>
      </div>
    </section>
  );
}
export default Profile;