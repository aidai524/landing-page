import React from 'react';

const IconSwap = () => {
  return (
    <svg width="88" height="92" viewBox="0 0 88 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="61.335" cy="26.5388" rx="26.165" ry="26.5388" fill="url(#paint0_linear_76:2148)" />
      <g filter="url(#filter0_bd_76:2148)">
        <circle cx="40.4029" cy="50.835" r="29.9029" fill="url(#paint1_linear_76:2148)" shape-rendering="crispEdges" />
        <circle
          cx="40.4029"
          cy="50.835"
          r="29.9029"
          stroke="url(#paint2_linear_76:2148)"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_76:2148"
          x="0"
          y="10.4321"
          width="80.8057"
          height="80.8058"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_76:2148" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="effect1_backgroundBlur_76:2148" result="effect2_dropShadow_76:2148" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_76:2148" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_76:2148"
          x1="87.0463"
          y1="5.91558"
          x2="34.8618"
          y2="13.1308"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00D6AF" />
          <stop offset="1" stop-color="#1AA289" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_76:2148"
          x1="69.506"
          y1="79.0932"
          x2="-1.23521"
          y2="53.9519"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
          <stop offset="1" stop-color="white" stop-opacity="0.22" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_76:2148"
          x1="68.9953"
          y1="20.9321"
          x2="1.45486"
          y2="47.414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C1FFF4" />
          <stop offset="0.588542" stop-color="white" stop-opacity="0.56" />
          <stop offset="1" stop-color="#BFCDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconSwap;
