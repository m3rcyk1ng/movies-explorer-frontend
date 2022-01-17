import React from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import './Register.styles.css';
import AuthForm from '../AuthForm/AuthForm';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import '../Header/Header.styles.css';

function Register() {
  return (
    <section className="register">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <AuthTitle classStyle={'sign'} titleText="Добро пожаловать!" />
      <AuthForm
        buttonText={'Зарегистрироваться'}
        textDescription={'Уже зарегистрированы?'}
        textLink={'Войти'}
      />
    </section>
  );
}

export default Register;
