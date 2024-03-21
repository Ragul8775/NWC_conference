import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
function DropDowns({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="relative inline-block text-left w-full font-inter font-semibold ">
      <motion.button
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        type="button"
        className=" sm:text-xl w-full rounded-md border border-gray-300 shadow-sm px-8 py-2 bg-white  text-gray-700 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div variants={childVariants} className="flex justify-between">
          {title}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </motion.div>
      </motion.button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <motion.a
                variants={childVariants}
                key={index}
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <FaBookOpen className="text-gray-700" />
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default DropDowns;
