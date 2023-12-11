// components/MembersTable.js
import React from "react";
import Image from "next/image";

const Table = () => {
  // Mock data for each member (replace with your actual data)
  const membersData = Array.from({ length: 20 }, (_, index) => ({
    name: `Member ${index + 1}`,
    domain: `Domain ${index + 1}`,
    duration: `Duration ${index + 1}`,
    year: `Year ${index + 1}`,
    position: `Position ${index + 1}`,
  }));

  return (
    <div className="overflow-y-auto custom-scrollbar">
      <table className=" bg-white w-full">
        <thead>
          <tr>
            <th className="w-[16%] border-b border-[#CBD5E1] text-[1rem] font-semibold leading-[2.4rem] text-[#334155] text-left pl-[1rem]">
              Name
            </th>
            <th className="w-[16%] border-b border-[#CBD5E1] text-[1rem] font-semibold leading-[2.4rem] text-[#334155] text-left">
              Domain
            </th>
            <th className="w-[16%] border-b border-[#CBD5E1] text-[1rem] font-semibold leading-[2.4rem] text-[#334155] text-left">
              Duration
            </th>
            <th className="w-[16%] border-b border-[#CBD5E1] text-[1rem] font-semibold leading-[2.4rem] text-[#334155] text-left">
              Year
            </th>
            <th className="w-[16%] border-b border-[#CBD5E1] text-[1rem] font-semibold leading-[2.4rem] text-[#334155] text-left">
              Position
            </th>
            <th className="w-[5%] border-b border-[#CBD5E1] text-[1rem] font-semibold leading-[2.4rem] text-[#334155]  text-left"></th>
          </tr>
        </thead>
        <tbody>
          {membersData.map((member, index) => (
            <tr
              key={index}
              className="hover:bg-[#E8E8E8] text-[0.9rem] text-black leading-[2.4rem]"
            >
              <td className="w-[16%] border-b border-[#CBD5E1] pl-[1rem]">
                <div className="mx-auto">{member.name}</div>
              </td>
              <td className="w-[16%] border-b border-[#CBD5E1]">
                <div className="mx-auto">{member.domain}</div>
              </td>
              <td className="w-[16%] border-b border-[#CBD5E1]">
                <div className="mx-auto">{member.duration}</div>
              </td>
              <td className="w-[16%] border-b border-[#CBD5E1]">
                <div className="mx-auto">{member.year}</div>
              </td>
              <td className="w-[16%] border-b border-[#CBD5E1]">
                <div className="mx-auto">{member.name}</div>
              </td>
              <td className="w-[5%] border-b border-[#CBD5E1]">
                <div className="mx-auto">
                  <div>
                    <Image
                      src="/icon/dots.svg"
                      alt="My Image"
                      width="12"
                      height="12"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
