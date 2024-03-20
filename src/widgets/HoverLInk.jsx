import React, { useState } from "react";

const HoverLInk = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative text-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
        className="absolute -bottom-2 -left-0 -right-0 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
      />
    </a>
  );
};

export default HoverLInk;
