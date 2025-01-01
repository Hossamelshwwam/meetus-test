import React from "react";

const Ellipse1 = () => {
  return (
    <svg
      width="1202"
      height="820"
      viewBox="0 0 1202 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_0_20)">
        <circle cx="733.5" cy="86.5" r="333.5" fill="#E477F6" />
      </g>
      <defs>
        <filter
          id="filter0_f_0_20"
          x="0"
          y="-647"
          width="1467"
          height="1467"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_0_20"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Ellipse1;
