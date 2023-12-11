"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SideNavItem } from "@/types/types";

export const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

  return (
    <div className="text-[#FFF]">
      {
        <Link
          href={item.path}
          className={`flex flex-row space-x-[1.3rem] items-center px-[1.1rem] py-[0.8rem]  ${
            item.path === pathname
              ? "bg-[#CBD5E1] text-[#0F172A] shadow-custom rounded-[0.5rem]"
              : "text-[#94A3B8]"
          }`}
        >
          <Image
            src={item.iconURL ?? ""}
            alt="My Image"
            width="24"
            height="24"
            className={`min-w-[2.4rem] min-h-[2.4rem] ${
              item.path === pathname ? "custom-svg" : ""
            } `}
          />
          <span className="font-medium text-[1.4rem] flex">{item.name}</span>
        </Link>
      }
    </div>
  );
};
