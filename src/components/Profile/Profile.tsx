import React from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import './Profile.styles.css';

function Profile() {
  return (
    <section className="profile">
      <AuthTitle classStyle={'profile'} titleText="Привет, Дмитрий!" />
      <form className="profile__form">
        <div className="profile__string">
          <input
            id="name"
            className="profile-form__input"
            type="text"
            placeholder="Как вас зовут?"
            minLength={2}
            maxLength={40}
            required
          />
          <label className="profile-form__label" htmlFor="input-name">
            Имя
          </label>
        </div>
        <div className="profile__string">
          <input
            id="email"
            className="profile-form__input"
            type="email"
            placeholder="Введите адрес электронной почты"
            required
          />
          <label className="profile-form__label" htmlFor="input-email">
            E-mail
          </label>
        </div>
        <button className="profile__button-edit">Редактировать</button>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
