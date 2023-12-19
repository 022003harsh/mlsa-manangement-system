import React from "react";
import Leads from "@/components/core/member/LeadsSection";
const Member: React.FC = () => {
  const handleLeadArrowClick = () => {};

  return (
    <div>
      <Leads onLeadArrowClick={handleLeadArrowClick} />
    </div>
  );
};

export default Member;
