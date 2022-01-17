import React from 'react';
import './Login.styles.css';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import '../Header/Header.styles.css';

function Login() {
  return (
    <section className="login">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <AuthTitle classStyle={'sign'} titleText="Рады видеть!" />
      <AuthForm
        buttonText={'Войти'}
        textDescription={'Ещё не зарегистрированы?'}
        textLink={'Регистрация'}
      />
    </section>
  );
}

export default Login;
