import React from 'react';
import { RefPrice } from '~src/hooks/home';
import { IconRef } from '../icon';

type Props = {
  data?: RefPrice;
};

const BtnAmount = ({ data }: Props) => {
  return (
    <button className="RefAmount relative ml-7 h-9">
      <span className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 border border-solid border-primary rounded-full box-border">
        <IconRef />
      </span>
      <span className="RefAmount-text pl-11 pr-5 text-xl text-center text-white">${data?.['ref-finance'].usd}</span>
    </button>
  );
};

export default BtnAmount;
