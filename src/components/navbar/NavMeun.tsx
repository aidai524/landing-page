import React, { useEffect } from 'react';
import { AiOutlineMedium } from 'react-icons/ai';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { useRefPrice } from '~src/hooks/home';
import Dropdown, { DropdownItem } from '../dropdown';
import { IconBubble, IconRef } from '../icon';

import './NavMenu.scss';

const dropdownItems: DropdownItem[] = [
  {
    icon: <FaTwitter />,
    title: 'Twitter',
    href: 'https://twitter.com/finance_ref'
  },
  {
    icon: <FaTelegramPlane />,
    title: 'Telegram',
    href: 'https://discord.gg/SJBGcfMxJz'
  },
  {
    icon: <FaDiscord />,
    title: 'Discord',
    href: 'https://t.me/ref_finance'
  },
  {
    icon: <AiOutlineMedium />,
    title: 'Medium',
    href: 'https://ref-finance.medium.com/'
  }
];

const NavMenu = () => {
  const { data } = useRefPrice();

  console.log(data);

  return (
    <div className="NavMenu">
      <span className="NavMenu_iconQuiz">
        <IconBubble />
        <span className="NavMenu_iconQuiz-text">Quiz</span>
      </span>
      <a href="" className="NavMenu_item">
        <span>About</span>
      </a>
      <a href="" className="NavMenu_item">
        <span>Developers</span>
      </a>
      <a href="" className="NavMenu_item">
        <span>Community</span>
        <Dropdown items={dropdownItems} className="NavMenu_dropdown" />
      </a>
      <button className="NavMenu_btnLaunch">Launch APP</button>
      <button className="NavMenu_btnAmount">
        <span className="NavMenu_btnAmount-circle">
          <IconRef />
        </span>
        <span className="NavMenu_btnAmount-text">${data?.['ref-finance'].usd}</span>
      </button>
    </div>
  );
};

export default NavMenu;
