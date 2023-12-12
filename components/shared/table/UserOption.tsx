import React from "react";

const UserOptions = ({ onViewProfile, onDeleteUser }: any) => {
  return (
    <div className="absolute rounded-[0.6rem] top-[80%] right-0 z-10 p-[0.3rem] bg-white border text-[1.3rem] shadow-md">
      <div
        onClick={onViewProfile}
        className="cursor-pointer hover:bg-[#E8E8E8] rounded-[0.6rem] p-[.6rem]"
      >
        View Profile
      </div>
      <div
        onClick={onDeleteUser}
        className="cursor-pointer  hover:bg-[#E8E8E8] rounded-[0.6rem] p-[.6rem]"
      >
        Delete
      </div>
    </div>
  );
};

export default UserOptions;
