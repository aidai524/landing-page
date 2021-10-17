import React from 'react';
import { IconDiscord, IconTelegram, IconTwitter } from '~src/components/icon';

const IntroIcons = () => {
  return (
    <div className="IntroIcons">
      <a className="IntroIcons-item" href="">
        <IconDiscord />
      </a>
      <a className="IntroIcons-item" href="">
        <IconTwitter />
      </a>
      <a className="IntroIcons-item" href="">
        <IconTelegram />
      </a>
      <a className="IntroIcons-item" href="">
        {/* TODO: hover状态 */}
        <img
          src="https://i.postimg.cc/SjFbsd8C/medium-1024x254-1.png"
          className="IntroIcons-iconMedium"
          alt="icon_medium"
        />
      </a>
    </div>
  );
};

export default IntroIcons;
