import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/shared/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className=" min-w-[85vw] ">{children}</div>
      </div>
    </main>
  );
}
