import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80 mx-auto p-2">
      <div className="flex md:order-2">
        <button
          onClick={toggle}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-2 focus:bg-gray-200 "
        >
          <AiOutlineMenuFold className="text-orange-200 text-lg" />
        </button>
      </div>
      <div
        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className={`flex flex-col items-center p-4  md:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:justify-evenly md:w-full md:space-x-8 md:mt-0 md:border-0 ${
            isOpen ? "bg-orange-100 bg-opacity-70" : ""
          } `}
        >
          <li className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700">
            Home
          </li>
          <li className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700">
            About
          </li>
          <li className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700">
            Projects
          </li>
          <li className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
