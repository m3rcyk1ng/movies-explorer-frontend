import React, {useEffect, useState} from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import './Profile.styles.css';
import { profile } from '../../common/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/FormValidator/FormValidator';
import Header from '../Header/Header';
import {mainApi} from "../../utils/MainApi/MainApi";

function Profile({ loggedIn, handleSignOut }: any) {
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues, validateEmail } = useFormWithValidation();
  const [successMessage , setSuccessMessage] = useState<String>('');

  function handleUpdateProfileInfo(evt: any) {
    evt.preventDefault();
    handleEditProfile(values);
  }

  function handleEditProfile(values: any) {
    mainApi.editUserInfo(values)
      .then(() => {
        setCurrentUser(values);
        setSuccessMessage('Успешно!');
        setTimeout(() => setSuccessMessage(''), 3000);
      })
      .catch(console.log);
  }

  useEffect(() => {
    setValues(currentUser)
  }, [currentUser]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <AuthTitle classStyle={'profile'} titleText={`Здравствуй, ${currentUser.name}!`} />
        <form className="profile__form" onSubmit={handleUpdateProfileInfo}>
          <div className="profile__string">
            <input
              id="name"
              name="name"
              autoComplete="nope"
              className="profile-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength={2}
              maxLength={40}
              value={values.name}
              onChange={handleChange}
              required
            />
            <label className="profile-form__label" htmlFor="input-name">
              {profile.Name}
            </label>
          </div>
          <div className="profile__string">
            <input
              id="email"
              name="email"
              autoComplete="nope"
              className="profile-form__input"
              type="email"
              placeholder="Введите адрес электронной почты"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label className="profile-form__label" htmlFor="input-email">
              {profile.Email}
            </label>
          </div>
          <span className="profile__error_message">{errors.name}</span>
          <span className="profile__error_message">
            {validateEmail(values.email) && 'Email не валиден'}
          </span>
          <span className="profile__success_message">
            {successMessage}
          </span>
          <button
            className="profile__button-edit"
            type="submit"
            disabled={
              !isValid ||
              validateEmail(values.email) ||
              (values.name === currentUser.name &&
              values.email === currentUser.email)
            }
          >
            {profile.Edit}
          </button>
        </form>
        <button className="profile__button-exit" onClick={handleSignOut}>
          {profile.Logout}
        </button>
      </section>
    </>
  );
}

export default Profile;
