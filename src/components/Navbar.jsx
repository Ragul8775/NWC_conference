import React, { useState } from "react";
import Logo from "../assets/LOgo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-light shadow-lg z-200 font-[main] font-semibold">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between md:inline ">
          <div className="flex justify-between space-x-4">
            <div>
              <a
                href="#"
                className="flex items-center py-2 px-2 text-gray-700 hover:text-gray-900 "
              >
                <img src={Logo} width={140} />
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-primaryLight hover:underline hover:decoration-primary hover:decoration-2"
              >
                Home
              </a>

              {/* Dropdown Trigger */}
              <div className="relative">
                <div className="flex justify-center items-center hover:underline hover:decoration-4">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="
                    flex justify-center items-center gap-2  py-5 px-3 text-gray-700 "
                  >
                    Services
                    <span>
                      {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </button>
                </div>
                {/* Conditional rendering for Dropdown Items */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Web Development
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      SEO
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                About
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Services
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
