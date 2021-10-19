import React, { FC, ReactNode } from 'react';

interface MenuItemProps {
  label: string;
  href?: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, href }) => {
  return (
    <li className="mb-5 text-white opacity-50 font-poppins text-base s:text-sm hover:opacity-100 s:col-span-1">
      <a href={href}>{label}</a>
    </li>
  );
};

interface MenuProps {
  label: string;
  children?: ReactNode[] | ReactNode;
}

const Menu: FC<MenuProps> = ({ label, children }) => {
  return (
    <ul className="flex flex-col">
      <li className="mb-3 font-poppins text-lg s:text-sm text-white s:text-mobile">{label}</li>
      <>{children}</>
    </ul>
  );
};

const FooterMenus = () => {
  return (
    <>
      <Menu label="PROJECT">
        <MenuItem label="Swap" />
        <MenuItem label="Farm" />
      </Menu>
      <Menu label="ABOUT">
        <MenuItem label="DOC" />
        <MenuItem label="Forum" />
        <MenuItem label="Medium" />
      </Menu>
      <Menu label="COMMUNITY">
        <MenuItem label="Twitter" />
        <MenuItem label="Discord" />
        <MenuItem label="Telegram" />
      </Menu>
    </>
  );
};

export default FooterMenus;
