import React, { CSSProperties } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
};

const IconCircle = ({ className, style }: Props) => {
  return (
    <svg
      className={className}
      style={style}
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_299:871)">
        <circle cx="37" cy="37" r="25" fill="url(#paint0_linear_299:871)" shape-rendering="crispEdges" />
        <circle
          cx="37"
          cy="37"
          r="25"
          stroke="url(#paint1_linear_299:871)"
          stroke-width="3"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_299:871"
          x="0.5"
          y="0.5"
          width="73"
          height="73"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_299:871" />
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
          <feBlend mode="normal" in2="effect1_backgroundBlur_299:871" result="effect2_dropShadow_299:871" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_299:871" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_299:871"
          x1="61.3313"
          y1="60.625"
          x2="2.18891"
          y2="39.6058"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
          <stop offset="1" stop-color="white" stop-opacity="0.22" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_299:871"
          x1="60.9044"
          y1="12"
          x2="4.43791"
          y2="34.1399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C1FFF4" />
          <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
          <stop offset="1" stop-color="#BFCDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconCircle;
