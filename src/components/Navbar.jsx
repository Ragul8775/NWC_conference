import React, { useState } from "react";
import Logo from "../assets/LOgo.png";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import HoverLInk from "../widgets/HoverLInk";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-light shadow-lg z-200 font-[main] font-semibold">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between md:inline ">
          <div className="flex justify-around space-x-4">
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
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                HOME
              </a>

              <div className="flex  justify-center  py-5 px-3 hover:text-gray-900">
                <FlyoutLink href="#" FlyoutContent={AboutContent}>
                  ABOUT
                </FlyoutLink>
              </div>
              <div className="flex  justify-center  py-5 px-3 hover:text-gray-900 ">
                <FlyoutLink href="#" FlyoutContent={AuthorContent}>
                  AUTHORS
                </FlyoutLink>
              </div>
              <div className="py-5 px-3">
                <HoverLInk>SPONSORS</HoverLInk>
              </div>
              <div className="py-5 px-3">
                <HoverLInk>CONTACT</HoverLInk>
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              {isOpen ? (
                <IoCloseSharp className="text-3xl font-bold" />
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="flex flex-col gap-3 py-4 items-center bg-blue-200">
          <HoverLInk>HOME</HoverLInk>
          <div className="flex  justify-center  px-3 hover:text-gray-900">
            <FlyoutLink href="#" FlyoutContent={AboutContent}>
              ABOUT
            </FlyoutLink>
          </div>
          <div className="flex  justify-center   px-3 hover:text-gray-900">
            <FlyoutLink href="#" FlyoutContent={AuthorContent}>
              AUTHORS
            </FlyoutLink>
          </div>
          <HoverLInk>CONTACT</HoverLInk>
        </div>
      </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit z-30"
    >
      <a href={href} className="relative text-gray-700">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black z-50"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent " />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl z-50 ">
      <div className="mb-3 space-y-3 flex flex-col">
        <HoverLInk href="/">About Us</HoverLInk>
        <HoverLInk href="/">Committee</HoverLInk>
        <HoverLInk href="/">Speakers</HoverLInk>
      </div>
    </div>
  );
};
const AuthorContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3 flex flex-col">
        <HoverLInk href="/">Tracks</HoverLInk>
        <HoverLInk href="/">Important Dates</HoverLInk>
        <HoverLInk href="/">Submissions</HoverLInk>
        <HoverLInk href="/">Registrations</HoverLInk>
        <HoverLInk href="/">Publications</HoverLInk>
        <HoverLInk href="/">Pre-Conference Lectures</HoverLInk>
        <HoverLInk href="/">Pre-Conference Workshops</HoverLInk>
        <HoverLInk href="/">Broucher</HoverLInk>
        <HoverLInk href="/">Venue</HoverLInk>
        <HoverLInk href="/">Travel & Visa</HoverLInk>
      </div>
    </div>
  );
};

export default Navbar;
