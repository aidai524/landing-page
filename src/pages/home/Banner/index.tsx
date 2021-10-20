import React from 'react';
import Content from './Content';
import MContent from './MContent';
import { IconMNear, IconNear } from '~src/components/icon';
import { BlockChain, MBlockChain } from '~src/components/pic';
import { Coins, MCoins } from '~src/components/conins';

import './index.scss';

const Banner = () => {
  return (
    <div className="mx-auto w-5/6 s:w-2/3">
      <div className="inline-flex flex-col items-end ml-32 my-32 s:items-center s:m-0 s:w-full">
        <IconNear />
        <IconMNear />
        <Content />
        <MContent />
        <button className="Banner_btnLaunch l:hidden mt-4 h-10 text-lg font-bold italic text-white rounded z-10">
          Launch APP
        </button>
      </div>

      <div className="mt-12">
        <Coins />
        <MCoins />
      </div>

      <BlockChain />
      <MBlockChain />
    </div>
  );
};

export default Banner;
