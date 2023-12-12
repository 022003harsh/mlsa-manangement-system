import React from "react";
import Image from "next/image";

interface LeadProps {
  member: any; // Replace 'any' with the actual type of your member data
}

const Lead: React.FC<LeadProps> = ({ member }) => {
  return (
    <div className="shadow-custom p-[1rem] flex justify-between items-center rounded-[0.5rem]">
      <div className="flex space-x-[0.8rem] items-center">
        <div className="relative w-[3.4rem] h-[3.4rem] rounded-full bg-white shadow-custom">
          <Image
            src={member.iconURL ?? ""}
            alt="Lead Image"
            width="30"
            height="30"
            className={`w-[3rem] h-[3rem] absolute left-[0.2rem] top-[0.2rem]`}
          />
        </div>

        <div className="flex flex-col leading-[1.4rem] text-[1.2rem]">
          <p className="font-medium">{member.name}</p>
          <p className="font-semibold text-[#94A3B8]">{member.position}</p>
        </div>
      </div>
      <Image
        src="/icon/right.svg"
        alt="icon Image"
        width="6"
        height="15"
        className="w-[0.6rem] h-[1.5rem] cursor-pointer"
      />
    </div>
  );
};

export default Lead;
