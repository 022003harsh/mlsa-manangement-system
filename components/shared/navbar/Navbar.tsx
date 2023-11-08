import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-pallete-200 text-gray-600  ">
      <div className="   mx-auto flex flex-col flex-wrap items-center justify-between py-[1rem] px-[3.8rem] md:flex-row">
        <div className="flex items-center justify-between text-[1.3rem] leading-[1.1rem] text-black font-medium">
          <p className="">Welcome</p>
          <span className="ml-2">User</span>
        </div>
        <div className="flex items-center gap-3">
          {/* toggle button */}
          <p className="text-[1.1rem] font-medium">mlsa@kiit.ac.in</p>
          <div className="flex gap-8">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: " h-[3.2rem] w-[3.2rem]",
                  },
                  variables: {
                    colorPrimary: "#ff7000",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
