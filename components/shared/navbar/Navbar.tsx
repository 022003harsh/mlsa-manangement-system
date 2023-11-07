import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full border-2 bg-white text-gray-600  ">
      <div className="   mx-auto flex flex-col flex-wrap items-center justify-between p-5 md:flex-row">
        <div className="flex items-center justify-between">
          <p>Navbar</p>
        </div>
        <div className="flex gap-8 border-2 border-red-300">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: " h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
