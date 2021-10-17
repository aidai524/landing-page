import React from 'react';
import NavMenu from './NavMeun';
import Logo from '../pic/Logo';

import './index.scss';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar_wrapper">
        <Logo />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
