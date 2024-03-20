import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  const text =
    "Second International Conference on Recent Trends in Data Science andits Applications (ICRTDA 2023)".split(
      " "
    );
  return (
    <div>
      <div className="relative bg-gradient-to-r py-24 md:py-36 from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className=" text-3xl sm:text-4xl font-bold leading-tight mb-4 text-balance px-4 max-w-7xl">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>

          <a
            href="#"
            className="bg-blue-700 text-white hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex justify-between items-center gap-2 px-4 py-4 text-2xl font-semibold">
          <span>
            <FaLocationDot />
          </span>
          <h2>SRMIST</h2>
        </div>
        <div className="flex justify-between items-center gap-2 px-4 py-4 text-lg font-semibold">
          <span>
            <FaPhoneAlt />
          </span>
          <h2 className="text-2xl">+91-9626611060 | +91-8838222378</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
