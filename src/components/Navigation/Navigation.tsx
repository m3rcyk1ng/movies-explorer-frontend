import React, { useState } from 'react';
import './Navigation.styles.css';
import { NavLink } from 'react-router-dom';
import { navigation } from "../../common/constants";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  function handleClickOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleClickCloseMenu(e: any) {
    if (e.target === e.currentTarget || e.target.classList.contains('navigation__icon-close')) {
      setIsOpenMenu(false);
    }
  }

  return (
    <nav className="navigation">
      <button className="navigation__icon-burger" onClick={handleClickOpenMenu} />
      <div
        className={`navigation__overlay${isOpenMenu ? ' navigation__overlay_display_flex' : ''}`}
        onClick={handleClickCloseMenu}
      >
        <div className="navigation__container">
          <button className="navigation__icon-close" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link ${isActive && 'navigation__link_active'}`
            }
          >
            {navigation.Main}
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `navigation__link ${isActive && 'navigation__link_active'}`
            }
          >
            {navigation.Films}
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `navigation__link ${isActive && 'navigation__link_active'}`
            }
          >
            {navigation.SavedFilms}
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `navigation__btn-account ${isActive && 'navigation__link_active'}`
            }
          >
            {navigation.Account}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
