import { useEffect, useState } from 'react';
import axios from 'axios';

export interface RefPrice {
  'ref-finance': {
    usd: number;
  };
}

export const useRefPrice = () => {
  const [data, setData] = useState<RefPrice>();

  useEffect(() => {
    axios.get<RefPrice>('https://api.coingecko.com/api/v3/simple/price?ids=ref-finance&vs_currencies=usd').then(res => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }, []);

  return { data };
};
