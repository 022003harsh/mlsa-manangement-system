import React from "react";
import { EVENT_SPONSORS } from "@/constants";
import Image from "next/image";

const EventSponsors = () => {
  return (
    <div className="px-[1rem] flex flex-col space-y-[0.8rem]">
      <div className="text-black text-[1.4rem] font-semibold leading-[2.4rem]">
        <p>Sponsors</p>
      </div>
      <div className="flex flex-col">
        {EVENT_SPONSORS.map((item, index) => (
          <div className="flex items-center justify-between">
            <p className="text-black text-[1rem] font-medium leading-[2.4rem]">{item.name}</p>
            <Image src={item.iconURL} alt="icon" width="12" height="12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSponsors;
