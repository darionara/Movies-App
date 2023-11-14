import type { FC } from 'react';

import { IconProps } from '@/types/IconType';

const ArrowDownIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_dd_12_66)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3533 10.8533C10.2596 10.947 10.1325 10.9996 9.99998 10.9996C9.86748 10.9996 9.7404 10.947 9.64665 10.8533L4.64665 5.85332C4.55833 5.75854 4.51024 5.63318 4.51253 5.50364C4.51481 5.37411 4.56729 5.25052 4.6589 5.15891C4.75051 5.0673 4.8741 5.01483 5.00363 5.01254C5.13316 5.01025 5.25853 5.05834 5.35331 5.14666L9.99998 9.79332L14.6466 5.14666C14.6924 5.09753 14.7476 5.05813 14.809 5.0308C14.8703 5.00347 14.9365 4.98878 15.0036 4.9876C15.0708 4.98641 15.1375 4.99876 15.1997 5.02391C15.262 5.04906 15.3185 5.08649 15.366 5.13396C15.4135 5.18144 15.4509 5.238 15.4761 5.30026C15.5012 5.36252 15.5136 5.4292 15.5124 5.49634C15.5112 5.56347 15.4965 5.62968 15.4692 5.69102C15.4418 5.75235 15.4024 5.80755 15.3533 5.85332L10.3533 10.8533Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_12_66"
        x="-2"
        y="0"
        width="24"
        height="24"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12_66"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_12_66"
          result="effect2_dropShadow_12_66"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_12_66"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ArrowDownIcon;
