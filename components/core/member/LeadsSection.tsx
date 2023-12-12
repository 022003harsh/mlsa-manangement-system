import React from "react";
import { MEMBERS_DATA } from "@/constants";
import Lead from "./LeadCard";
import Headingcount from "@/components/shared/Headingcount";

const Leads = () => {
  return (
    <div className="mt-[2.6rem] flex flex-col px-[0.5rem]">
      <Headingcount name={"Leads"} count={"16"} />
      <div className="mt-[0.4rem]">
        <div className="grid w-full grid-cols-3 gap-[1.6rem] md:grid-cols-4 lg:grid-cols-5">
          {MEMBERS_DATA.map((member: any, index) => {
            return <Lead key={index} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Leads;
