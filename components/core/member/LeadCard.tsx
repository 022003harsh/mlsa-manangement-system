// LeadCard.tsx
import React from "react";
import Image from "next/image";

interface LeadProps {
  member: any; // Replace 'any' with the actual type of your member data
  onLeadArrowClick: (member: any) => void;
}

const Lead: React.FC<LeadProps> = ({ member, onLeadArrowClick }) => {
  return (
    <div className="flex items-center justify-between rounded-[0.5rem] p-[1rem] shadow-custom">
      <div className="flex items-center space-x-[0.8rem]">
        <div className="relative h-[3.4rem] w-[3.4rem] rounded-full bg-white shadow-custom">
          <Image
            src={member?.iconURL && ""}
            alt="Lead Image"
            width="30"
            height="30"
            className={`absolute left-[0.2rem] top-[0.2rem] h-[3rem] w-[3rem]`}
          />
        </div>

        <div className="flex flex-col text-[1.2rem] leading-[1.4rem]">
          <p className="font-medium">{member.name}</p>
          <p className="font-semibold text-[#94A3B8]">{member.position}</p>
        </div>
      </div>
      <Image
        src="/icon/right.svg"
        alt="icon Image"
        width="6"
        height="15"
        className="h-[1.5rem] w-[0.6rem] cursor-pointer"
      />
    </div>
  );
};

export default Lead;
