import React from "react";
import poster from "../assets/banner.jpg";
import { motion } from "framer-motion";
const ImportantDates = () => {
  return (
    <div className="px-6 bg-white my-6 text-gray-500 max-w-7xl w-full font-main">
      <section className="flex flex-col md:flex-row justify-between ">
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 9 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="my-6 flex flex-col justify-between gap-6"
        >
          <div>
            <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-black ">
              Important Dates
            </h1>
            <div className="flex justify-start gap-3 items-center">
              <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
              <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
              <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
              <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
            </div>
          </div>
          <table className="w-full text-xl text-left rtl:text-right text-gray-500 ">
            <tbody>
              <tr className="bg-white border ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Submission of Abstract
                </th>
                <td className="px-6 py-4">15th February, 2025</td>
              </tr>
              <tr className="bg-white border ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Submission of Full Paper
                </th>
                <td className="px-6 py-4">1st March, 2025</td>
              </tr>
              <tr className="bg-white border ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Authors Notification
                </th>
                <td className="px-6 py-4">10th March, 2025</td>
              </tr>
              <tr className="bg-white border ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Final Manuscript Due
                </th>
                <td className="px-6 py-4">20th March, 2025</td>
              </tr>
            </tbody>
          </table>
          <h2 className="font-semibold mt-5 text-xl">
            Registration date for selected paper is extended till March 27th
          </h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 8 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <img
            src={poster}
            className=" relative w-64 rounded-2xl opacity-80 "
          />
          <h2
            className="absolute border rounded-lg py-3 px-4 bg-gray-500 text-white font-semibold
           hover:bg-gray-700  cursor-pointer flex gap-2"
          >
            Broucher
            <span>
              <svg
                class="w-6 h-6text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
                />
              </svg>
            </span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default ImportantDates;
