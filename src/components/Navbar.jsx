import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import MSidebar from "../sidebar/MSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="z-10 flex items-center justify-between p-4">
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between w-full md:hidden">
        <FaBars
          className="text-2xl cursor-pointer text-indigo-950"
          onClick={toggleNavbar}
        />
        <div className="p-4 text-lg font-medium text-black">
          Hello Shubham👋,
        </div>
        <div className="flex-grow"></div>
        <FaSearch className="text-xl text-black cursor-pointer" />
      </div>

      {/* Desktop Navbar */}
      <div className="items-center justify-between hidden w-full md:flex">
        <div className="flex-grow text-xl font-semibold text-black">
          Hello Shubham👋,
        </div>
        <div className="relative flex items-center ml-4">
          <FaSearch className="absolute text-gray-600 left-3 top-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-3 border rounded-lg"
          />
        </div>
      </div>
      {showSidebar && <MSidebar />}
    </nav>
  );
};

export default Navbar;
