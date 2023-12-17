"use client";

import React from "react";
import Link from "next/link";
import { SIDEBAR_MENU } from "@/constants";
import { MenuItem } from "./Menuitem";

const Sidebar = () => {
  return (
    <div className="fixed flex h-screen w-[20.7rem] flex-1 bg-[#E2E8F0]">
      <div className="flex w-full flex-col space-y-[5rem] px-[1.4rem]">
        <div className="flex cursor-pointer pl-[0.7rem] pt-[1.8rem]">
          <Link href="/profile" className="">
            <div className="flex items-center justify-center space-x-[1rem] ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="63"
                  viewBox="0 0 57 63"
                  fill="none"
                >
                  <defs>
                    <clipPath id="roundedClip">
                      <circle cx="28.5" cy="31.5" r="21.5" />
                    </clipPath>
                    <filter
                      id="filter0_d_554_7213"
                      x="0.683594"
                      y="0.773438"
                      width="55.6328"
                      height="61.4531"
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
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_554_7213"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_554_7213"
                        result="shape"
                      />
                    </filter>
                  </defs>

                  <g filter="url(#filter0_d_554_7213)">
                    <path
                      d="M26 5.44338C27.547 4.55021 29.453 4.55021 31 5.44338L49.8157 16.3066C51.3627 17.1998 52.3157 18.8504 52.3157 20.6368V42.3632C52.3157 44.1496 51.3627 45.8002 49.8157 46.6934L31 57.5566C29.453 58.4498 27.547 58.4498 26 57.5566L7.1843 46.6934C5.6373 45.8002 4.6843 44.1496 4.6843 42.3632V20.6368C4.6843 18.8504 5.6373 17.1998 7.1843 16.3066L26 5.44338Z"
                      fill="white"
                    />
                  </g>

                  {/* <image
                    xlinkHref="/logo/Ellipse.svg"
                    x="10"
                    y="10"
                    width="37"
                    height="43"
                    clipPath="url(#roundedClip)"
                  /> */}
                </svg>
              </div>

              <div>
                <p className="text-[1.4rem] font-medium leading-[1.6rem] text-black">
                  Hi Harsh
                </p>
                <p className="text-[1rem] font-semibold leading-[1.6rem] text-[#94A3B8]">
                  View Profile
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-y-[1.4rem]  ">
          {SIDEBAR_MENU.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
