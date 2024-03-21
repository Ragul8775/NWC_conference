import React, { useState, useEffect } from "react";
import Logo from "../assets/LOgo.png";
import Logo1 from "../assets/Logo1.png";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import HoverLInk from "../widgets/HoverLInk";
import InnerLinks from "../widgets/InnerLInks";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled more than 50px, otherwise false
      setIsScrolled(window.scrollY > 50);
    };

    // Register the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 0.2, // Initial delay before starting the children animations
      },
    },
  };

  // Variants for each child
  const childVariants = {
    hidden: { opacity: 0.5, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`   z-50 fixed top-0 left-0 w-full transition-all duration-300 font-[inter] font-bold text-lg  ${
        isScrolled
          ? "backdrop-blur-sm bg-white/40"
          : "backdrop-blur-sm bg-transparent "
      }`}
    >
      <div className="max-w-7xl  mx-auto ">
        <div className="flex justify-between md:inline ">
          <div className="flex justify-between space-x-4">
            <div>
              <a href="#" className="flex items-center  px-2 text-gray-300  ">
                {isScrolled ? (
                  <img src={Logo} width={140} className="w-40 lg:w-48" />
                ) : (
                  <img src={Logo1} width={140} className="w-40 lg:w-48" />
                )}
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1 ">
              <div className="py-5 px-3 ">
                <HoverLInk>HOME</HoverLInk>
              </div>
              <div className="flex  justify-center  py-5 px-3 ">
                <FlyoutLink href="#" FlyoutContent={AboutContent}>
                  ABOUT
                </FlyoutLink>
              </div>
              <div className="flex  justify-center  py-5 px-3  ">
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
            <motion.button
              whileTap={{ scale: 0.85 }}
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
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={` flex flex-col gap-3 py-4 items-center ${
                isScrolled
                  ? "backdrop-blur-sm bg-white/40 "
                  : "backdrop-blur-sm bg-transparent "
              }`}
            >
              <motion.div variants={childVariants}>
                <HoverLInk href="#">HOME</HoverLInk>
              </motion.div>
              <motion.div
                variants={childVariants}
                className="flex justify-center px-3 "
              >
                <FlyoutLink href="#" FlyoutContent={AboutContent}>
                  ABOUT
                </FlyoutLink>
              </motion.div>
              <motion.div
                variants={childVariants}
                className="flex justify-center px-3 "
              >
                <FlyoutLink href="#" FlyoutContent={AuthorContent}>
                  AUTHORS
                </FlyoutLink>
              </motion.div>
              <motion.div variants={childVariants}>
                <HoverLInk href="#">CONTACT</HoverLInk>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled more than 50px, otherwise false
      setIsScrolled(window.scrollY > 50);
    };

    // Register the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit "
    >
      <a
        href={href}
        className={`relative ${
          isScrolled ? "text-gray-800" : "text-gray-300 "
        }`}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primaryLight transition-transform duration-300 ease-out"
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
    <div className="w-64 bg-white p-6 shadow-xl ">
      <div className="mb-3 space-y-3 flex flex-col ">
        <InnerLinks href="/">About Us</InnerLinks>
        <InnerLinks href="/">Committee</InnerLinks>
        <InnerLinks href="/">Speakers</InnerLinks>
      </div>
    </div>
  );
};
const AuthorContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3 flex flex-col">
        <InnerLinks href="/">Tracks</InnerLinks>
        <InnerLinks href="/">Important Dates</InnerLinks>
        <InnerLinks href="/">Submissions</InnerLinks>
        <InnerLinks href="/">Registrations</InnerLinks>
        <InnerLinks href="/">Publications</InnerLinks>
        <InnerLinks href="/">Pre-Conference Lectures</InnerLinks>
        <InnerLinks href="/">Pre-Conference Workshops</InnerLinks>
        <InnerLinks href="/">Broucher</InnerLinks>
        <InnerLinks href="/">Venue</InnerLinks>
        <InnerLinks href="/">Travel & Visa</InnerLinks>
      </div>
    </div>
  );
};

export default Navbar;
