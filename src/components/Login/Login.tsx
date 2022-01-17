import React from 'react';
import './Login.styles.css';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import '../Header/Header.styles.css';
import { login } from "../../common/constants";

function Login({ handleLogin }: any) {

  function handleSubmitForm(values: any) {
    handleLogin(values);
  }

  return (
    <section className="login">
      <Link to="/">
        <img className="header__logo" src={logo} alt={login.Logo} />
      </Link>
      <AuthTitle classStyle={'sign'} titleText={login.Glad} />
      <AuthForm
        buttonText={login.Signin}
        textDescription={login.NotRegistred}
        textLink={login.Registration}
        handleSubmitForm={handleSubmitForm}
      />
    </section>
  );
}

export default Login;
