import React, { useState } from 'react';
import { AiOutlineMedium } from 'react-icons/ai';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { RefPrice } from '~src/hooks/home';
import BtnAmount from '../btnAmount';
import Dropdown, { DropdownItem } from '../dropdown';
import { IconBubble } from '../icon';

type Props = {
  data?: RefPrice;
};

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

const MNavMenu = ({ data }: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="NavMenu flex items-center s:hidden">
      <span className="relative inline-flex">
        <IconBubble />
        <span className="NavMenu_iconQuiz-text absolute left-3">Quiz</span>
      </span>
      <a href="" className="NavMenu_item relative ml-9">
        <span>About</span>
      </a>
      <a href="" className="NavMenu_item relative ml-9">
        <span>Developers</span>
      </a>
      <a
        href=""
        className="NavMenu_item relative ml-9"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <span>Community</span>
        <Dropdown items={dropdownItems} show={isHover} />
      </a>
      <button className="NavMenu_btnLaunch ml-12 h-10 text-base font-bold text-white rounded">Launch APP</button>
      <BtnAmount data={data} />
    </div>
  );
};

export default MNavMenu;
