import React from 'react';
import { Logo } from '../pic';

import './index.scss';
import FooterMenu from './Menu';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_left">
        <Logo />
        <div className="Footer_left-text">
          Ref Finance is one of the core projects in the DeFi ecosystem on NEAR Protocol. Ref aims to bring DeFi one
          step closer to the people.
        </div>
      </div>
      <div className="Footer_right">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Footer;
