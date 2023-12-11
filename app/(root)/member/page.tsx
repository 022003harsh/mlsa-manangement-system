"use client";
import React from "react";
import Searchdetails from "@/components/shared/topsection/Searchdetails";
import { MEMBERS_DATA } from "@/constants";
import { useState } from "react";
import Leads from "@/components/core/member/Leads";
import Modal from "@/components/core/forms/shared/Modal";
import Memberstable from "@/components/core/member/Memberstable";

const Member: React.FC = () => {
  const [searchResults, setSearchResults] = useState(MEMBERS_DATA);
  const handleSearch = (results: any[]) => {
    setSearchResults(results);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Searchdetails
        data={MEMBERS_DATA}
        onSearch={handleSearch}
        add={"AddMember"}
        setShowModal={setShowModal}
        value={"Look for a member"}
      />

      {/* Display the search results */}
      {/* <ul>
        {searchResults.map((member:any) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul> */}

      <Leads />

      <div className="flex flex-row space-x-[1.5rem] min-h-[38.1rem] pr-[0.5rem] mt-[2.6rem]">
        <Memberstable />
        <div className="w-[30%] min-h-full border ml-[1.5rem]"></div>
      </div>

      <Modal
        isvisible={showModal}
        onClose={() => setShowModal(false)}
        value={"member"}
      />
    </div>
  );
};

export default Member;
