"use client";
import React, { useState } from "react";
import Searchdetails from "@/components/shared/topsection/SearchDetails";
import { MEMBERS_DATA } from "@/constants";
import Leads from "@/components/core/member/LeadsSection";
import Modal from "@/components/core/forms/shared/Modal";
import Memberstable from "@/components/core/member/MembersTable";
import LeadsNotion from "@/components/core/member/LeadsNotion";

const Member: React.FC = () => {
  // const [searchResults, setSearchResults] = useState(MEMBERS_DATA);
  const handleSearch = (results: any[]) => {
    // setSearchResults(results);
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(MEMBERS_DATA[0]);
  const handleLeadArrowClick = (member: any) => {
    // Handle the selected member data, you can use it as needed
    setSelectedLead(member);
  };

  return (
    <div>
      <Searchdetails
        data={MEMBERS_DATA}
        onSearch={handleSearch}
        add={"Add Member"}
        setShowModal={setShowModal}
        value={"Look for a member"}
      />

      {/* Display the search results */}
      {/* <ul>
        {searchResults.map((member:any) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul> */}

      <Leads onLeadArrowClick={handleLeadArrowClick} />

      <div className="mt-[2.6rem] flex min-h-[38.1rem] flex-row space-x-[1.5rem] pr-[0.5rem]">
        <Memberstable />
        <div className="w-[30%] min-h-full border ml-[1.5rem]">
          {selectedLead && <LeadsNotion selectedLead={selectedLead} />}
        </div>
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
