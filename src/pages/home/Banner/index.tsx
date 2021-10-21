import React from 'react';
import Content from './Content';
import MContent from './MContent';
import { IconMNear, IconNear } from '~src/components/icon';
import { BlockChain, MBlockChain } from '~src/components/pic';
import { Coins, MCoins } from '~src/components/conins';

import './index.scss';
import { MdHeight } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="Bg_Image mx-auto justify-center flex flex-col">
      <div className="flex justify-center  w-full">
        <div className="Index_Header flex s:relative">
          <div className="inline-flex flex-col items-end  my-32 s:items-center s:m-0 s:mb-40 s:w-full s:absolute" >
            <IconNear />
            <IconMNear />
            <Content />
            <MContent />
            <button
              className="Banner_btnLaunch l:hidden font-poppins mt-4 h-10 text-lg font-bold italic text-white rounded z-10"
              onClick={() => window.open('https://app.ref.finance', '_blank')}
            >
              Launch APP
            </button>
          </div>
          <BlockChain />
          <MBlockChain />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="Index_Header flex s:mt-4">
          <img src="https://i.postimg.cc/hjcL3f6W/tokens-in-banner.png" alt=""
            style={{
              width: '100%',
              height: 'auto'
            }} />

        </div>
      </div>



      {/* <MBlockChain /> */}
    </div>
  );
};

export default Banner;
