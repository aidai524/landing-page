import React from 'react';

import './index.scss';

const DataCard = () => {
  return (
    <ul className="DataCard">
      <li className="DataCard_item">
        <div className="DataCard_item-value">$0.01</div>
        <span className="DataCard_item-title">Lowest Fee</span>
      </li>
      <li className="DataCard_item">
        <div className="DataCard_item-value">1-2 s</div>
        <span className="DataCard_item-title">Trade Finality</span>
      </li>
      <li className="DataCard_item">
        <div className="DataCard_item-value">22,359</div>
        <span className="DataCard_item-title">Users</span>
      </li>
    </ul>
  );
};

export default DataCard;
