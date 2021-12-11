import React from 'react';
import './Header.styles.css';
import logo from '../../assets/images/logo.svg';
import { buttons } from '../../common/constants';
import Navigation from '../Navigation/Navigation';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === '/' ? 'header__blue-theme' : ''}`}>
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {pathname === '/' ? (
          <nav className="header__buttons_container">
            <Link className="header__register" to="/signup">
              {buttons.Reg}
            </Link>
            <Link className="header__signin" to="/signin">
              {buttons.Signin}
            </Link>
          </nav>
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default Header;
