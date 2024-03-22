import React from "react";
import Main from "../assets/Main.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  const text1 = "2nd International Conference on".split(" ");
  const text2 = "Recent Trends in Data Science and its Applications ".split(
    " "
  );
  const text3 = "(ICRTDA 2025)".split(" ");
  const text4 = "(17th-18th,April,2025)".split(" ");

  return (
    <div>
      <div className="relative bg-gradient-to-r py-24 md:py-36 from-purple-600 to-blue-600 text-white overflow-hidden h-screen font-written">
        <div className="absolute inset-0">
          <img
            src={Main}
            alt="Background Image"
            className="object-cover object-center w-full h-full "
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className=" text-2xl sm:text-2xl font-medium leading-tight mb-4 w-3/4 text-balance px-4 max-w-7xl">
            {text1.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
          <h1 className=" text-5xl sm:text-5xl font-black leading-tight mb-4 w-3/4 text-wrap px-4 max-w-7xl ">
            {text2.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
          <h1 className=" text-4xl sm:text-4xl font-bold leading-tight mb-4 w-3/4 text-wrap px-4 max-w-7xl">
            {text3.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
          <h1 className=" text-3xl sm:text-3xl font-bold font-inter leading-tight mb-4 w-3/4 text-wrap px-4 max-w-7xl opacity-85">
            
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: 7 / 10,
                }}
                
              >
                17<sup>th</sup>-18<sup>th</sup> April 2025
              </motion.span>

          </h1>
          {/*  <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            href="#"
            className="bg-blue-800 text-white hover:bg-blue-600 font-inter py-2 mt-8 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </motion.a> */}
        </div>
      </div>
      <div>
        <div class="scroll-downs flex flex-col justify-center items-center gap-2">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
          <p class="scrol text-center font-mono opacity-70 animate-bounce">
            [-Scroll-]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
