"use client";

import { TypeAnimation } from "react-type-animation";

export default function TextAnimiton() {
  return (
    <nav className="bg-[#020617] text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo Section */}
        {/* Mahabub<span className="text-indigo-500">Dev</span> */}
        {/* TypeAnimation Section */}
        <div className="text-2xl font-medium mt-2 sm:mt-0 text-indigo-300">
          <TypeAnimation
            sequence={["Mahabub", 100]}
            wrapper="span"
            speed={50}
          />
        </div>
      </div>
    </nav>
  );
}
