import React from 'react';
import Content from './Content';
import MContent from './MContent';
import { IconMNear, IconNear } from '~src/components/icon';
import { BlockChain, MBlockChain } from '~src/components/pic';

import './index.scss';

const Banner = () => {
  return (
    <div className="Banner absolute left-0 right-0 mx-auto top-32 w-5/6 s:top-36 s:w-2/3">
      <div className="flex flex-col items-end ml-36 mt-8 mb-32 w-5/12 s:items-center s:m-0 s:w-full">
        <IconNear />
        <IconMNear />
        <Content />
        <MContent />
        <button className="Banner_btnLaunch l:hidden mt-4 h-10 text-lg font-bold italic text-white rounded z-10">
          Launch APP
        </button>
      </div>
      <BlockChain />
      <MBlockChain />
    </div>
  );
};

export default Banner;
