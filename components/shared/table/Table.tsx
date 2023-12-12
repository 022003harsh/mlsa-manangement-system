// components/MembersTable.js
"use Client";
import React, { useState } from "react";
import Image from "next/image";
import UserOptions from "./UserOption";
import Modal from "@/components/core/forms/shared/Modal";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(null);

  const handleOptionsClick = (index: any) => {
    setSelectedRowIndex(index);
    setShowOptions((prev) => (prev === index ? null : index));
  };

  const handleViewProfile = (userId: any) => {
    console.log(`View profile for user with ID: ${userId}`);
    setShowOptions(null);
    // Redirect to user profile page (you might use react-router-dom or other routing mechanism)
  };

  const handleDeleteUser = (userId: any) => {
    console.log(`Delete user with ID: ${userId}`);
    setShowModal(true);
    // Show delete confirmation modal or perform delete action
    setShowOptions(null); // Close options after action
  };

  const membersData = Array.from({ length: 20 }, (_, index) => ({
    id: `${index + 1}`,
    name: `Member ${index + 1}`,
    domain: `Domain ${index + 1}`,
    duration: `Duration ${index + 1}`,
    year: `Year ${index + 1}`,
    position: `Position ${index + 1}`,
  }));

  return (
    <div className="overflow-y-auto custom-scrollbar">
      <table className="bg-white w-full">
        <thead>
          <tr className="text-[1.2rem] border-b leading-[2.4rem] border-[#CBD5E1] font-semibold  text-[#334155]">
            <th className="w-[16%] text-left pl-[1rem]">Name</th>
            <th className="w-[16%] text-left">Domain</th>
            <th className="w-[16%] text-left">Duration</th>
            <th className="w-[16%] text-left">Year</th>
            <th className="w-[16%] text-left">Position</th>
            <th className="w-[5%] text-left"></th>
          </tr>
        </thead>
        <tbody>
          {membersData.map((member, index) => (
            <tr
              key={index}
              className="hover:bg-[#E8E8E8] text-[1.1rem] relative text-black leading-[2.4rem]"
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
                  <div onClick={() => handleOptionsClick(index)}>
                    <Image
                      src="/icon/dots.svg"
                      alt="My Image"
                      width="12"
                      height="12"
                      className="cursor-pointer"
                    />
                  </div>
                  {showOptions === index && (
                    <UserOptions
                      onViewProfile={() => handleViewProfile(member.id)}
                      onDeleteUser={() => handleDeleteUser(member.id)}
                    />
                  )}

                  <Modal
                    isvisible={showModal}
                    onClose={() => setShowModal(false)}
                    value={membersData[selectedRowIndex]?.name}
                    feature={"confirmation"}
                  />
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
