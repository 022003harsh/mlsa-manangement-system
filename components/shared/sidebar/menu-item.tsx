'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SideNavItem } from '@/types/types';
import { Icon } from '@iconify/react';


export const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
  
    return (
      <div className="text-[#FFF]">
        {item.submenu ? (
          <>
          <div className={`${
                subMenuOpen ? 'bg-[#FFF] rounded-l-[1.2rem]' : ''
              }`}>
          
            <button
              onClick={toggleSubMenu}
              className={`flex flex-row items-center p-[1.1rem] rounded-l-[1.2rem] w-full justify-between hover:bg-[#FFF] hover:text-pallete-900 ${
                subMenuOpen ? 'bg-[#FFF] text-pallete-900' : ''
              }`}
            >
              <div className="flex flex-row space-x-[0.8rem] items-center">
                <Image src={item.iconURL ?? ''}
                       alt="My Image"
                       width="13"  
                       height="13" 
                       className='min-w-[1.3rem] min-h-[1.3rem]'/>
                <span className="font-medium text-[1.3rem] leading-[1.6rem] flex">{item.name}</span>
              </div>
  
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                <Image src="/icon/chevron-down.svg"
                       alt="icon"
                       width="13"  
                       height="13" 
                       className='min-w-[1.3rem] min-h-[1.3rem]'/>
              </div>
            </button>
  
            {subMenuOpen && (
              <div className="pb-[1.7rem] ml-[2.4rem] flex flex-col space-y-1 text-[1rem] text-pallete-900">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      
                    >
                        <button className={` rounded-[0.4rem] bg-opacity-60 p-[0.4rem] ${
                            subItem.path === pathname ? 'bg-pallete-900 text-[#FFF]' : ''
                         }`}>
                            <div className="flex flex-row space-x-[0.4rem] items-center">
                              <Image src={subItem.iconURL ?? ''}
                                alt="My Image"
                                width="10"  
                                height="10" 
                                className='min-w-[1rem] min-h-[1rem]'/>
                              <span>{subItem.name}</span>
                            </div>
                        </button>
                      
                    </Link>
                  );
                })}
              </div>
            )}
            </div>
          </>
        ) : (
          <Link
            href={item.path}
            className={`flex flex-row space-x-[0.8rem] items-center p-[1.1rem] rounded-l-[1.2rem] hover:bg-[#FFF] hover:text-pallete-900 ${
              item.path === pathname ? 'bg-[#FFF] text-pallete-900' : ''
            }`}
          >
            <Image src={item.iconURL ?? ''}
                       alt="My Image"
                       width="13"  
                       height="13" 
                       className='min-w-[1.3rem] min-h-[1.3rem]'/>
            <span className="font-medium text-[1.3rem] flex">{item.name}</span>
          </Link>
        )}
      </div>
    );
  };