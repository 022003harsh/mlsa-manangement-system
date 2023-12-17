import React from "react";
import { EVENT_DETAILS } from "@/constants";
import Image from "next/image";

const EventDetails = () => {
  return (
    <div className="px-[1rem] flex flex-col space-y-[0.8rem]">
      <div className="flex items-center justify-between text-black text-[1.4rem] font-semibold leading-[2.4rem] ">
        <p>Details</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M10.0304 1.94291C10.192 1.76781 10.3837 1.62892 10.5948 1.53416C10.8058 1.4394 11.0321 1.39063 11.2605 1.39062C11.489 1.39062 11.7152 1.4394 11.9262 1.53416C12.1373 1.62892 12.3291 1.76781 12.4906 1.94291C12.6521 2.11801 12.7803 2.32587 12.8677 2.55465C12.9551 2.78342 13.0001 3.02862 13.0001 3.27624C13.0001 3.52387 12.9551 3.76906 12.8677 3.99784C12.7803 4.22661 12.6521 4.43448 12.4906 4.60958L4.18745 13.6096L0.804688 14.6096L1.72726 10.9429L10.0304 1.94291Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col space-y-[0.2rem]">
        {EVENT_DETAILS.map((item,index)=>(
            <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-[1rem]">
                    <Image 
                    src={item.iconURL}
                    alt="icon"
                    width="12"
                    height="12"/>
                    <p className=" text-pallete-400 text-[1rem] font-medium leading-[1.6rem]">{item.name}</p>
                </div>
                <p className=" text-black text-[1rem] font-bold leading-[1.6rem]">{item.detail}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
