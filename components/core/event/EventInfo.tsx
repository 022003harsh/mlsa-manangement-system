import React from "react";
import Image from "next/image";
import EventDetails from "./EventDetails";
import EventSponsors from "./EventSponsors";
import EventLinks from "./EventLinks";

const EventInfo = () => {
  return (
    <div className="border h-full w-full overflow-y-auto custom-scrollbar">
      <div className="flex flex-col space-y-[1rem] ">
        <Image
          src="/image/image 2.png"
          alt="event image"
          width="395"
          height="220"
          className="w-[34.7rem] h-[13.8rem]"
        />
        
        <EventDetails/>
        <div className="border-b border-[#CBD5E1]"></div>
        <EventSponsors/>
        <div className="border-b border-[#CBD5E1]"></div>
        <EventLinks/>

      </div>
    </div>
  );
};

export default EventInfo;
