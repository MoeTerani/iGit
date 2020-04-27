import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../Images/git-logo-white.png';

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img alt="header" id="header__img" src={logo} />
      </NavLink>
      <NavLink to="/">
        <h2 className="header__title">iGit</h2>
      </NavLink>
    </div>
  );
}
