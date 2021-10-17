import React from 'react';
import { IconAirdrop, IconEarn, IconSwap, IconTrade } from '~src/components/icon';

import './index.scss';

const FeatureCard = () => {
  return (
    <ul className="FeatureCard">
      <li className="FeatureCard_item">
        <span className="FeatureCard_item-icon">
          <IconSwap />
        </span>
        <div className="FeatureCard_item-title">
          Swap with <br /> the lowest fee
        </div>
        <span className="FeatureCard_item-desc">
          Users can stake their $REF tokens to earn more and more $REF over time, distributed via protocol fees.
        </span>
      </li>
      <li className="FeatureCard_item">
        <span className="FeatureCard_item-icon">
          <IconTrade />
        </span>
        <div className="FeatureCard_item-title">Trade faster high efficacy</div>
        <div className="FeatureCard_item-desc">
          Ref Finance's AMM DEX enables permissionsless and automated trading between any native NEAR or bridged token
          through liquidity pools managed by smart contracts.
        </div>
      </li>
      <li className="FeatureCard_item">
        <span className="FeatureCard_item-icon">
          <IconEarn />
        </span>
        <div className="FeatureCard_item-title">Earn More Multi-rewards</div>
        <span className="FeatureCard_item-desc">
          On Ref Finance, liquidity providers can earn $REF tokens (or other NEP-141 tokens) by staking their liquidity
          provider (LP) tokens.
        </span>
      </li>
      <li className="FeatureCard_item">
        <span className="FeatureCard_item-icon">
          <IconAirdrop />
        </span>
        <div className="FeatureCard_item-title">
          Airdrop <br /> Earn Rewards
        </div>
        <span className="FeatureCard_item-desc">
          Trades are excuted instantly and confirmed on the blockchain within hours.
        </span>
      </li>
    </ul>
  );
};

export default FeatureCard;
