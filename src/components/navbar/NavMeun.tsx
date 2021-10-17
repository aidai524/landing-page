import React from 'react';
import { IconBubble, IconRef } from '../icon';

import './NavMenu.scss';

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <span className="NavMenu_iconQuiz">
        <IconBubble />
        <span className="NavMenu_iconQuiz-text">Quiz</span>
      </span>
      <a href="" className="NavMenu_item">
        About
      </a>
      <a href="" className="NavMenu_item">
        Developers
      </a>
      <a href="" className="NavMenu_item">
        Community
      </a>
      <button className="NavMenu_btnLaunch">Launch APP</button>
      <button className="NavMenu_btnAmount">
        <span className="NavMenu_btnAmount-circle">
          <IconRef />
        </span>
        <span className="NavMenu_btnAmount-text">$4.33</span>
      </button>
    </div>
  );
};

export default NavMenu;
