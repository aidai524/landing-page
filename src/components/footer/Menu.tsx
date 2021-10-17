import React from 'react';

const FooterMenu = () => {
  return (
    <footer className="FooterMenu">
      <ul className="FooterMenu_nav">
        <li className="FooterMenu_nav-title">PROJECT</li>
        <li className="FooterMenu_nav-item">
          <a href="">Swap</a>
        </li>
        <li className="FooterMenu_nav-item">
          <a href="">Farm</a>
        </li>
      </ul>
      <ul className="FooterMenu_nav">
        <li className="FooterMenu_nav-title">ABOUT</li>
        <li className="FooterMenu_nav-item">
          <a href="">DOC</a>
        </li>
        <li className="FooterMenu_nav-item">
          <a href="">Fourm</a>
        </li>
        <li className="FooterMenu_nav-item">
          <a href="">Medium</a>
        </li>
      </ul>
      <ul className="FooterMenu_nav">
        <li className="FooterMenu_nav-title">COMMUNITY</li>
        <li className="FooterMenu_nav-item">
          <a href="">Twitter</a>
        </li>
        <li className="FooterMenu_nav-item">
          <a href="">Discord</a>
        </li>
        <li className="FooterMenu_nav-item">
          <a href="">Telegram</a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterMenu;
