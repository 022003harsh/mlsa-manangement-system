import React from "react";

const Button = ({ children, onClickFunction }: any) => {
  return (
    <div onClick={onClickFunction} className="flex items-center space-x-[1rem] border border-black rounded-[0.6rem] px-[1.6rem] py-[0.8rem] font-medium text-[1.4rem] leading-[2.4rem] max-w-fit ml-auto cursor-pointer">
      <div>{children}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
      >
        <path
          d="M1 1L5 6L1 11"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Button;
