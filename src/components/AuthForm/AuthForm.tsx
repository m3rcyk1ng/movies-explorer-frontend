import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AuthForm.styles.css';
import { authForm } from '../../common/constants';
import { useFormWithValidation } from "../../utils/FormValidator/FormValidator";

function AuthForm({ buttonText, textDescription, textLink, handleSubmitForm }: any) {
  const { pathname } = useLocation();
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt: any) {
    evt.preventDefault();
    handleSubmitForm(values)
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        {pathname === '/signup' && (
          <div className="auth-form__container">
            <span className="auth-form__error name-input-error">{errors.name}</span>
            <input
              id='name'
              name='name'
              className="auth-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              required
            />
            <label className="auth-form__label" htmlFor="name">
              Имя
            </label>
          </div>
        )}
        <div className="auth-form__container">
          <span className="auth-form__error name-input-error">{errors.email}</span>
          <input
            id="email"
            name="email"
            className="auth-form__input"
            type="email"
            placeholder="Электронная почта"
            onChange={handleChange}
            required
          />
          <label className="auth-form__label" htmlFor="email">
            {authForm.Email}
          </label>
        </div>
        <div className="auth-form__container">
          <span className="auth-form__error name-input-error">{errors.password}</span>
          <input
            id="password"
            name="password"
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            minLength={8}
            required
          />
          <label className="auth-form__label" htmlFor="password">
            {authForm.Pass}
          </label>
          <span className="auth-form__error password-input-error" />
        </div>
        <div
          className={`auth-form__button-container ${
            pathname === '/signin' ? 'auth-form__margin-small' : 'auth-form__margin-large'
          }`}
        >
          <button className="auth-form__button-submit" type="submit" disabled={!isValid}>
            {buttonText}
          </button>
          <div className="auth-form__sign-container">
            <p className="auth-form__caption">{textDescription}</p>
            { pathname === '/signup' && (
              <Link to="/signin" className="auth-form__link">
                {textLink}
              </Link>
            )}
            { pathname === '/signin' && (
              <Link to="/signup" className="auth-form__link">
                {textLink}
              </Link>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
