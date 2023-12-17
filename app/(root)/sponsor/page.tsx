"use client"
import Modal from "@/components/core/forms/shared/Modal";
import Searchdetails from "@/components/shared/topsection/SearchDetails";
import { SPONSORS } from "@/constants";
import React, { useState } from "react";

const Sponsor = () => {
  // const [searchResults, setSearchResults] = useState(SPONSORS);
  const handleSearch = (results: any[]) => {
    // setSearchResults(results);
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(SPONSORS[0]);
  const handleLeadArrowClick = (member: any) => {
    // Handle the selected member data, you can use it as needed
    setSelectedLead(member);
  };
  return (
    <div>
      <Searchdetails
        data={SPONSORS}
        onSearch={handleSearch}
        add={"Add Sponsor"}
        setShowModal={setShowModal}
        value={"Look for a sponsor"}
      />

      <Modal
        isvisible={showModal}
        onClose={() => setShowModal(false)}
        value={"sponsor"}
        feature={"form"}
      />
    </div>
  );
};

export default Sponsor;