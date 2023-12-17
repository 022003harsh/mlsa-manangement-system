"use client";
import Modal from "@/components/core/forms/shared/Modal";
import Searchdetails from "@/components/shared/topsection/SearchDetails";
import { EVENTS } from "@/constants";
import React, { useState } from "react";
import EventsTable from "@/components/core/event/EventsTable";
import EventDetails from "@/components/core/event/EventInfo";

const Event = () => {
  // const [searchResults, setSearchResults] = useState(SPONSORS);
  const handleSearch = (results: any[]) => {
    // setSearchResults(results);
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(EVENTS[0]);
  const handleLeadArrowClick = (member: any) => {
    setSelectedLead(member);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <Searchdetails
        data={EVENTS}
        onSearch={handleSearch}
        add={"Add Event"}
        setShowModal={setShowModal}
        value={"Look for a event"}
      />
      <div className="mt-[2.6rem] h-[calc(100vh-11rem)] flex flex-row space-x-[1.5rem] pr-[0.5rem]">
        <EventsTable />
        <div className="w-[22%] min-h-full border ml-[1.5rem] py-[1rem] px-[1rem]">
          <EventDetails />
        </div>
      </div>

      <Modal
        isvisible={showModal}
        onClose={() => setShowModal(false)}
        value={"event"}
        feature={"form"}
      />
    </div>
  );
};

export default Event;
