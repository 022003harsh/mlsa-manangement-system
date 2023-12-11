import React from "react";
import Headingcount from "@/components/shared/Headingcount";
import  Filter  from "@/components/shared/table/Filter";
import Table from "@/components/shared/table/Table";

const Memberstable = () => {
  return (
    <div className="w-[70%] h-full max-h-[38rem] flex flex-col space-y-[0.7rem] ">
      <div className="flex flex-col space-y-[0.7rem] pl-[0.5rem]">
        <Headingcount name={"Members"} count={"87"} />
        <Filter />
      </div>
      <Table />
    </div>
  );
};

export default Memberstable;
