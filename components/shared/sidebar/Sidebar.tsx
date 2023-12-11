"use client";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { SIDEBAR_MENU } from "@/constants";
import { MenuItem } from "@/components/shared/sidebar/Menuitem";

const Sidebar = () => {
  return (
    <div className="w-[20.7rem] bg-[#E2E8F0] h-screen flex-1 fixed flex">
      <div className="flex flex-col space-y-[5rem] w-full px-[1.4rem]">
        <div className="flex pt-[1.8rem] pl-[0.7rem] cursor-pointer">
          <Link href="/profile" className="">
            <div className="flex items-center justify-center space-x-[1rem] ">
              <div>
                <Image
                  src="/logo/Polygon 1.svg"
                  alt="My Image"
                  width={50}
                  height={50}
                  className="min-w-[5rem] min-h-[5rem] w-[5rem] h-[5rem] "
                />
              </div>

              <div>
                <p className="text-black text-[1.4rem] font-medium leading-[1.6rem]">
                  Hi Harsh
                </p>
                <p className="text-[#94A3B8] text-[1rem] font-semibold leading-[1.6rem]">
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
