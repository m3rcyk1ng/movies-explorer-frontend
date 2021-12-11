import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AuthForm.styles.css';

function AuthForm({ buttonText, textDescription, textLink }: any) {
  const { pathname } = useLocation();

  return (
    <>
      <form className="auth-form">
        {pathname === '/signup' && (
          <div className="auth-form__container">
            <span className="auth-form__error name-input-error">АШЫПКА АШЫПОЧНАЯ</span>
            <input
              id="name"
              className="auth-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength={2}
              maxLength={40}
              required
            />
            <label className="auth-form__label" htmlFor="name">
              Имя
            </label>
          </div>
        )}
        <div className="auth-form__container">
          <span className="auth-form__error name-input-error">АШЫПКА АШЫПОЧНАЯ</span>
          <input
            id="email"
            className="auth-form__input"
            type="email"
            placeholder="Электронная почта"
            required
          />
          <label className="auth-form__label" htmlFor="email">
            E-mail
          </label>
        </div>
        <div className="auth-form__container">
          <span className="auth-form__error name-input-error">ГОРДОН, ТЫ НЕ ПРОЙДЕШЬ!!!!</span>
          <input
            id="password"
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            required
          />
          <label className="auth-form__label" htmlFor="password">
            Пароль
          </label>
          <span className="auth-form__error password-input-error" />
        </div>
      </form>
      <div className={`auth-form__button-container ${pathname === '/signin' ? 'auth-form__margin-small' : 'auth-form__margin-large'}`}>
        <button className="auth-form__button-submit" type="submit">
          {buttonText}
        </button>
        <div className="auth-form__sign-container">
          <p className="auth-form__caption">{textDescription}</p>
          <Link to="/signin" className="auth-form__link">
            {textLink}
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
