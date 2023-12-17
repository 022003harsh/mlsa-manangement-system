import React from "react";

const EventLinks = () => {
  return (
    <div className="px-[1rem]">
      <div className="text-black text-[1.4rem] font-semibold leading-[2.4rem]">
        <p>Links</p>
      </div>
      <div className="flex space-x-1 items-center">
        <p className="text-black text-[1rem] font-medium leading-[2.4rem]">Photos</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M5.89509 8.0082L5.12905 8.65099C4.62113 9.07718 3.96471 9.28415 3.30419 9.22636C2.64367 9.16858 2.03316 8.85076 1.60697 8.34285C1.18077 7.83493 0.973805 7.17851 1.03159 6.51799C1.08938 5.85747 1.40719 5.24696 1.91511 4.82077L2.68116 4.17798M4.97929 2.24962L5.74533 1.60683C6.25325 1.18063 6.90967 0.973664 7.57019 1.03145C8.23071 1.08924 8.84122 1.40705 9.26741 1.91497C9.69361 2.42289 9.90058 3.07931 9.84279 3.73983C9.785 4.40035 9.46719 5.01085 8.95927 5.43705L8.19323 6.07984M3.9051 6.41448L6.96928 3.84333"
            stroke="#0073CB"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default EventLinks;
