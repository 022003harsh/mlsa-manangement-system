"use Client"
import React, { useState } from "react";
import Lead from "./LeadCard";
import Headingcount from "@/components/shared/HeadingCount";
import { MEMBERS_DATA } from "@/constants";

const Leads = ({ onLeadArrowClick }: { onLeadArrowClick: (member: any) => void }) => {
  const [leadsData, setLeadsData] = useState(MEMBERS_DATA);

  const handleLeadArrowClick = (member: any) => {
    // Call the callback function with the selected member data
    onLeadArrowClick(member);
  };


  return (
    <div className="mt-[2.6rem] flex flex-col px-[0.5rem]">
      <Headingcount name={"Leads"} count={"16"} />
      <div className="mt-[0.4rem]">
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-[1.6rem]">
          {leadsData.map((member: any, index) => (
            <Lead key={index} member={member} onLeadArrowClick={handleLeadArrowClick} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Leads;

