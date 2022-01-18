import React, {useEffect} from 'react';
import './Login.styles.css';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthForm from '../AuthForm/AuthForm';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import '../Header/Header.styles.css';
import { login } from "../../common/constants";
import { ILoginProps } from "./ILoginProps";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Login({ handleLogin }: ILoginProps) {
  const { currentUser } = React.useContext(CurrentUserContext)
  const navigate = useNavigate();

  function handleSubmitForm(values: any) {
    handleLogin(values);
  }

  useEffect(() => {
    Object.keys(currentUser).length !== 0 && navigate('/profile')
  }, [currentUser]);

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
