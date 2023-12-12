import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-[calc(100vh-2.6rem)] overflow-hidden space-y-5 flex-grow shadow-custom rounded-[1rem] px-[2rem] py-[1rem] bg-white">
      <div className="scrollable-content overflow-y-auto">{children}</div>
    </div>
  );
}
