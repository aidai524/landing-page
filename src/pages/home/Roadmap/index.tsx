import React from 'react';

import './index.scss';

const Roadmap = () => {
  return (
    <div className="Roadmap">
      <svg
        className="Roadmap_line1"
        width="1440"
        height="526"
        viewBox="0 0 1440 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1454 0.5C1390.67 7 1246.8 34.4 1178 92C1092 164 1132.82 297.238 1076.5 385.5C897.5 666 112.5 442.5 0 402.5"
          stroke="url(#paint0_linear_76:2164)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_76:2164"
            x1="204"
            y1="532"
            x2="1387.5"
            y2="51.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00C6A2" />
            <stop offset="1" stop-color="#00C6A2" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="Roadmap_line2"
        width="1440"
        height="594"
        viewBox="0 0 1440 594"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1454 1C1390.67 7.5 1246.8 34.9 1178 92.5C1092 164.5 1132.82 297.738 1076.5 386C897.5 666.5 327.5 601 0 540"
          stroke="url(#paint0_linear_76:2163)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_76:2163"
            x1="204"
            y1="532.5"
            x2="1387.5"
            y2="52.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00C6A2" />
            <stop offset="1" stop-color="#00C6A2" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="Roadmap_title">Roadmap</h2>

      <div className="Roadmap_content"></div>
    </div>
  );
};

export default Roadmap;
