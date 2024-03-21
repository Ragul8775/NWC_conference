import React, { useState, useEffect } from "react";

const HoverLInk = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <a
      href={href}
      className={`relative ${isScrolled ? "text-gray-800" : "text-gray-300 "}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
        className="absolute -bottom-2 -left-0 -right-0 h-1 origin-left scale-x-0 rounded-full bg-primaryLight transition-transform duration-300 ease-out"
      />
    </a>
  );
};

export default HoverLInk;
