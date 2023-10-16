import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    return <Sidebar />;
  };

  return (
    <nav className="p-4 z-10 flex justify-between items-center">
      <div className="md:hidden flex justify-between items-center w-full">
        <FaBars
          className="text-2xl text-black cursor-pointer"
          onClick={toggleNavbar}
        />
        <div className="flex-grow"></div> {/* Empty space */}
        <FaSearch className="text-xl text-black cursor-pointer" />
      </div>
      <div className="hidden md:flex justify-between items-center w-full">
        <div className="text-xl font-semibold text-black flex-grow">
          Hello Shubham👋,
        </div>
        <div className="ml-4 relative flex items-center">
          <FaSearch className="absolute text-gray-600 left-3 top-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-3 border rounded-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
