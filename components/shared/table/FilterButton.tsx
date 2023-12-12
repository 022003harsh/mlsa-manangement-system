import React from "react";

interface Value {
  value: string;
}

const Button: React.FC<Value> = ({ value }) => {
  return (
    <div onClick={()=>{}} className="flex items-center space-x-[0.6rem] px-[1.6rem] border border-black rounded-full cursor-pointer">
      <div className="text-[1rem] font-semibold leading-[2.4rem] ">{value}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
      >
        <path
          d="M7 1.5L4 4.5L1 1.5"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Button;
