import React, {useEffect} from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import './Register.styles.css';
import AuthForm from '../AuthForm/AuthForm';
import logo from '../../assets/images/logo.svg';
import {Link, useNavigate} from 'react-router-dom';
import '../Header/Header.styles.css';
import { register } from "../../common/constants";
import { mainApi } from "../../utils/MainApi/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Register({ handleLogin }: any) {
  const { currentUser } = React.useContext(CurrentUserContext)
  const navigate = useNavigate();

  function handleRegister(values: any) {
    mainApi.register(values).then(() => {
      handleLogin(values);
    })
      .catch(console.log)
  }

  useEffect(() => {
    Object.keys(currentUser).length !== 0 && navigate('/profile')
  }, [currentUser]);
  
  return (
    <section className="register">
      <Link to="/">
        <img className="header__logo" src={logo} alt={register.Logo} />
      </Link>
      <AuthTitle classStyle={'sign'} titleText={register.Welcome} />
      <AuthForm
        buttonText={register.Signup}
        textDescription={register.Description}
        textLink={register.Login}
        handleSubmitForm={handleRegister}
      />
    </section>
  );
}

export default Register;
