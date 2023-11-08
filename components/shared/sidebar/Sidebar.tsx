'use client';
import Image from 'next/image';

import React from 'react';
import Link from 'next/link';
import { SIDEBAR_MENU } from '@/constants';
import {MenuItem} from '@/components/shared/sidebar/menu-item'

const Sidebar= () => {
  return(
  <div className="w-[20.8rem] bg-pallete-900 h-screen flex-1 fixed flex">
      <div className="flex flex-col space-y-20 w-full pl-[4.2rem] pt-[2.8rem]">
        <Link
          href="/"
          className=""
        >
          <Image
          src="/logo/mlsa-logo.svg"
          alt="My Image"
          width={129}
          height={32}
          className='min-w-[12.9rem] min-h-[3.2rem]'
          />
        </Link>

        <div className="flex flex-col space-y-[1.4rem]  ">
          {SIDEBAR_MENU.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
