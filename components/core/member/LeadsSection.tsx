import React from "react";
import Lead from "./LeadCard";
import Headingcount from "@/components/shared/Headingcount";
import { getAllMember } from "@/lib/actions/member.action";

const Leads = async ({
  onLeadArrowClick,
}: {
  onLeadArrowClick: (member: any) => void;
}) => {
  const leads = await getAllMember();

  const handleLeadArrowClick = (member: any) => {
    // Call the callback function with the selected member data
    onLeadArrowClick(member);
  };

  return (
    <div className="mt-[2.6rem] flex flex-col px-[0.5rem]">
      <Headingcount name={"Leads"} count={"16"} />
      <div className="mt-[0.4rem]">
        <div className="grid w-full grid-cols-3 gap-[1.6rem] md:grid-cols-4 lg:grid-cols-5">
          {leads.map((member: any, index) => (
            <Lead
              key={index}
              member={member}
              onLeadArrowClick={handleLeadArrowClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;
