"use client";
import React, { useState } from "react";
import Searchdetails from "@/components/shared/topsection/Searchdetails";
import { MEMBERS_DATA } from "@/constants";
import Leads from "@/components/core/member/LeadsSection";
import Modal from "@/components/core/forms/shared/Modal";
import Memberstable from "@/components/core/member/Memberstable";

const Member: React.FC = () => {
  // const [searchResults, setSearchResults] = useState(MEMBERS_DATA);
  const handleSearch = (results: any[]) => {
    // setSearchResults(results);
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

      <div className="mt-[2.6rem] flex min-h-[38.1rem] flex-row space-x-[1.5rem] pr-[0.5rem]">
        <Memberstable />
        <div className="ml-[1.5rem] min-h-full w-[30%] border"></div>
      </div>

      <Modal
        isvisible={showModal}
        onClose={() => setShowModal(false)}
        value={"member"}
        feature={"form"}
      />
    </div>
  );
};

export default Member;
