import React, { ReactNode } from 'react';
import cx from 'classnames';

import './index.scss';

export type DropdownItem = {
  icon: ReactNode;
  title: string;
  href: string;
};

type Props = {
  items: DropdownItem[];
  className?: string;
};

const Dropdown = ({ items, className }: Props) => {
  return (
    <ul className={cx(className, 'Dropdown')}>
      {items.map(({ icon, title, href }) => (
        <li className="Dropdown_item" key={title}>
          <a href={href} className="Dropdown_item-inner" target="_blank">
            <span className="Dropdown_item-icon">{icon}</span>
            <span className="Dropdown_item-title">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
