import React from "react";
import { MEMBERS_DATA } from "@/constants";
import Lead from "./LeadCard";
import Headingcount from "@/components/shared/HeadingCount";

const Leads = () => {
  return (
    <div className="flex flex-col mt-[2.6rem] px-[0.5rem]">
      <Headingcount name={"Leads"} count={"16"} />
      <div className="mt-[0.4rem]">
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-[1.6rem]">
          {MEMBERS_DATA.map((member: any, index) => {
            return <Lead key={index} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Leads;
