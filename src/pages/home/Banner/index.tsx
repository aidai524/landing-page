import React from 'react';
import IconNear from './IconNear';
import Content from './Content';

import './index.scss';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner_wrapper">
        <IconNear />
        <Content className="Banner_wrapper-content" />
        <button className="Banner_wrapper-btnLaunch">Launch APP</button>
      </div>
    </div>
  );
};

export default Banner;
