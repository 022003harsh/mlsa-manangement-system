import { ReactNode } from "react";

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col ml-[21.1rem] min-h-screen py-[1.3rem] pr-[2rem]">
      {children}
    </div>
  );
}
