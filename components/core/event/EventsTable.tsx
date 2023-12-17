import React from "react";
import Headingcount from "@/components/shared/HeadingCount";
import Filter from "@/components/shared/table/FilterSection";
import Table from "@/components/shared/table/Table";
import Button from "../forms/shared/Button";

const EventsTable = () => {
  return (
    <div className="w-[78%] h-full flex flex-col space-y-[0.7rem] ">
      <div className="flex flex-col space-y-[0.7rem] pl-[0.5rem]">
        <Headingcount name={"Events"} count={"16"} />
        <Filter />
      </div>
      <Table />
      <div className="ml-auto">
        <div className="border border-black px-[2.2rem] py-[0.4rem] text-[1rem] font-medium leading-[2.4rem] rounded-[0.6rem] cursor-pointer">
          Add Event Stats
        </div>
      </div>
    </div>
  );
};

export default EventsTable;
