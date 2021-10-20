import React from 'react';
import {
  IconCircle,
  IconCoin1,
  IconCoin2,
  IconCoin3,
  IconCoin4,
  IconMCoin1,
  IconMCoin2,
  IconMCoin3,
  IconMCoin4
} from '../icon';
import IconMCircle from '../icon/IconMCircle';

export const Coins = () => {
  return (
    <div className="relative flex w-full h-32 s:hidden">
      <IconCircle className="absolute -bottom-1" style={{ left: '36%' }} />

      <IconCoin1 className="absolute -bottom-5" style={{ left: '45%' }} />

      <IconCircle className="absolute -bottom-1" style={{ left: '55%' }} />

      <IconCoin2 className="absolute -bottom-5" style={{ left: '60%' }} />

      <IconCoin3 className="absolute -bottom-5" style={{ left: '66%' }} />

      <IconCircle className="absolute -bottom-1" style={{ left: '80%' }} />

      <IconCoin4 className="absolute -bottom-5" style={{ left: '80%' }} />

      <svg
        className="absolute bottom-0"
        style={{ left: '10%' }}
        width="975"
        height="2"
        viewBox="0 0 975 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1L975 0.999915" stroke="url(#paint0_linear_497:798)" stroke-width="2" />
        <defs>
          <linearGradient
            id="paint0_linear_497:798"
            x1="0"
            y1="1.98141"
            x2="965"
            y2="1.98141"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.8125" stop-color="#00C6A2" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const MCoins = () => {
  return (
    <div className="relative flex w-full l:hidden">
      <IconMCircle className="absolute -bottom-1" style={{ left: '-20%' }} />

      <IconMCoin1 className="absolute -bottom-4" style={{ left: '-6%' }} />

      <IconMCircle className="absolute -bottom-1" style={{ left: '20%' }} />

      <IconMCoin2 className="absolute -bottom-4" style={{ left: '22%' }} />

      <IconMCoin3 className="absolute -bottom-4" style={{ left: '40%' }} />

      <IconMCircle className="absolute -bottom-1" style={{ left: '74%' }} />

      <IconMCoin4 className="absolute -bottom-4" style={{ left: '77%' }} />
    </div>
  );
};
