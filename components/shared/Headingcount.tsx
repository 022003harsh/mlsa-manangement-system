import React from "react";

interface HeadingCountProps {
  name: string;
  count: string;
}

const Headingcount: React.FC<HeadingCountProps> = ({ name, count }) => {
  return (
    <>
      {name === "Leads" && (
        <div className="flex space-x-[0.3rem] text-[1.4rem] font-semibold leading-[2.4rem]">
          <div>{name}</div>
          <p className="text-[#94A3B8] ">({count})</p>
        </div>
      )}
      {name !== "Leads" && (
        <div className="flex items-center justify-between">
          <div className="flex space-x-[0.3rem] text-[1.4rem] font-semibold leading-[2.4rem]">
            <div>{name}</div>
            <p className="text-[#94A3B8] ">({count})</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-[0.2rem] rounded-full bg-black px-[1rem]">
            <div className="text-[1rem] font-semibold leading-[2.4rem] text-white">
              Filters
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M10.5 0.5H0.5L4.5 5.23V8.5L6.5 9.5V5.23L10.5 0.5Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Headingcount;
