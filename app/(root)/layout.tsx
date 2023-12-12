import React from "react";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import MarginWidthWrapper from "@/components/shared/sidebar/MarginWidthWeapper";
import PageWrapper from "@/components/shared/sidebar/PageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex overflow-x-hidden bg-[#E2E8F0]">
      <Sidebar />
      <main className="flex-1">
        <MarginWidthWrapper>
          {/* <Navbar /> */}
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
