import React from 'react';
import './Header.styles.css';
import logo from '../../assets/images/logo.svg';
import { buttons } from '../../common/constants';
import Navigation from '../Navigation/Navigation';
import { useLocation, Link } from 'react-router-dom';

function Header({ loggedIn }: any) {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === '/' ? 'header__blue-theme' : ''}`}>
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {loggedIn ? <Navigation /> : (
          <nav className="header__buttons_container">
            <Link className="header__register" to="/signup">
              {buttons.Reg}
            </Link>
            <Link className="header__signin" to="/signin">
              {buttons.Signin}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
