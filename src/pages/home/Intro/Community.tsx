import React from 'react';
import { FaDiscord, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiOutlineMedium } from 'react-icons/ai';

const Community = () => {
  return (
    <div className="Community">
      <a className="Community-item" href="">
        <FaDiscord />
      </a>
      <a className="Community-item" href="">
        <FaTwitter />
      </a>
      <a className="Community-item" href="">
        <FaTelegramPlane />
      </a>
      <a className="Community-item" href="">
        <AiOutlineMedium />
      </a>
    </div>
  );
};

export default Community;
