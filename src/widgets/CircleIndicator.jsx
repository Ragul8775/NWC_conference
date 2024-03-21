import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io"; // Ensure you have react-icons installed

export const CircleIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsBottom(latest >= 0.95); // Considered at the bottom if 95% scrolled
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90px",
        height: "90px",
      }}
    >
      {isBottom ? (
        <IoIosArrowUp
          size="30"
          className="border text-primaryLight rounded-full animate-bounce"
        />
      ) : (
        <svg width="60" height="60" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="royalblue"
            d="M 30, 30 m -25, 0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      )}
    </div>
  );
};
