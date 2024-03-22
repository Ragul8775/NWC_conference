import React from "react";
import { GiNewspaper } from "react-icons/gi";
import { LuPaperclip } from "react-icons/lu";
import PriceTabe1 from "../widgets/PriceTabe1";
import { motion } from "framer-motion";
const FeeAndPaper = () => {
  const emailAddress = "example@example.com";
  return (
    <div className="px-6 my-6 text-gray-500 max-w-7xl w-full font-main flex-col justify-center items-center gap-32">
      <motion.section
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
        className=""
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-black ">
              Registration Fee
            </h1>
            <div className="flex justify-start gap-3 items-center">
              <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
              <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
              <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
              <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
            </div>
          </div>
          <PriceTabe1 />
        </div>
      </motion.section>
      <motion.section
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
      >
        <div className="">
          <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-black ">
            Paper Submission
          </h1>
          <div className="flex justify-start gap-3 items-center">
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
          </div>
         {/*  <p className="mt-4 text-xl text-justify">
            Prospective authors are kindly invited to submit full text papers
            including results, tables, figures, and references. Full text papers
            (.pdf, .doc) will be accepted by Paper Submission Link tab at the
            top under “About ICRTDA 2023”. All submitted articles should report
            original, previously unpublished research results, experimental or
            theoretical. Articles submitted to the Conference should meet these
            criteria and must not be under consideration for publication
            elsewhere.
          </p>
          <p className="mt-4 text-xl">
            All registered, selected and domain specific papers will be
            published in UGC / Scopus / Google Scholar Indexed Journals.
          </p>
          <ul className="text-xl  mt-2 mx-2">
            <li className="mb-2 ml-4 flex items-center gap-3">
              <LuPaperclip />
              International Journal of Communication Networks and Information
              Security (IJCNIS)
            </li>
            <li className="mb-2 ml-4 flex items-center gap-3">
              <LuPaperclip />
              Educational Administration: Theory and Practice (Scopus Indexed
              Journal)
            </li>
            <li className="mb-2 ml-4 flex items-center gap-3">
              <LuPaperclip />
              Science Progress and Research (SPR) journal
            </li>
            <li className="mb-2 ml-4 flex items-center gap-3">
              <LuPaperclip />
              AIP Conference Proceedings (Awaiting Approval)
            </li>
            <li className="mb-2 ml-4 flex items-center gap-3">
              <LuPaperclip />
              Journal of Computer Science implications
            </li>
            <li className="mb-2 ml-4 flex items-center gap-3">
              <LuPaperclip />
              IOS series Journal (Awaiting Approval)
            </li>
          </ul>
          */}
          <div className="mt-4 text-xl">
            {/* <h2 className="font-bold">Paper submission through</h2>
            <a
              href={`mailto:${emailAddress}`}
              className="text-blue-800 hover:underline"
            >
              example@example.com
            </a> */}
            <h1>To Be Completed...</h1>
          </div> 
        </div>
      </motion.section>
    </div>
  );
};

export default FeeAndPaper;
