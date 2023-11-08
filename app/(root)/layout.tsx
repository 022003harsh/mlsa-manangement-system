import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import MarginWidthWrapper from "@/components/shared/sidebar/margin-width-weapper";
import PageWrapper from "@/components/shared/sidebar/page-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
        <main className="flex-1">
        <MarginWidthWrapper>
              <Navbar />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
    </main>
    </div>
    
  );
}
