import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiCodesignal } from "react-icons/si";
const MembersData = {
  "CHIEF PATRONS": [
    "Dr.T.R.Paarivendhar, Chancellor, SRMIST",
    "Dr. P.Ravi Pachamoothoo, Pro-Chancellor (Administration), SRMIST",
    "Dr.P.Sathyanarayanan, Pro-Chancellor (Academics), SRMIST",
    "Dr.R.Shivakumar, Vice President, SRMIST",
    "Dr.C.Muthamizhchelvan, Vice Chancellor, SRMIST",
    "Dr.S.Ponnusamy, Registrar, SRMIST",
    "Dr.T.V.Gopal, Dean (CET), SRMIST",
    
  ],

  "ADVISORY BOARD MEMBERS": [
    "Dr.Revathi Venkataraman, Professor & Chairperson, School of Computing, SRMIST.",
    "Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",
  "Dr.M.Pushpalatha, Professor & Head, Computing Technologies, SRMIST",
    "Dr.Annapurani Panaiyappan.K, Professor & Head, Networking and Communications, SRMIST",
    "Dr.R.Annie Uthra, Professor & Head, Computational Intelligence, SRMIST",
  ],
  "ADVISORY COMMITTEE ": [
    "Dr.K.Porkumaran, Chairman, IEEE Madras Section.",
    "Dr.P.Sakthivel, Vice Chairman-Academics, IEEE Madras Section.",
    "Dr.R.Hariprakash, Secretary, IEEE Madras Section.",
    "Dr.S.Radha, Treasurer, IEEE Madras Section.",
    
  ],
  "CONFERENCE CHAIR": [
    "Dr.Revathi Venkataraman, Professor & Chairperson, School of Computing, SRMIST.",
    "Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",
  ],
  " CONVENER": [
    "Dr. Kavitha V, Professor, DSBS, SRMIST",
    "Dr. Sasikala E, Professor, DSBS, SRMIST"],
    " CO-CONVENER": [
      "Dr. A. Murugan, Professor, DSBS, SRMIST",
      "Dr. S. Ganesh Kumar, Professor, DSBS, SRMIST",
      "Dr. N. Parthiban,Associate Professor, DSBS, SRMIST"],

      "EXECUTIVE COMMITTEE": [
       ],
};
const Members = () => {
  const [activeTab, setActiveTab] = useState("CHIEF PATRONS");
  return (
    <div className=" bg-primaryLight text-white max-w-7xl w-full h-auto font-main">
      <div className="flex flex-col justify-center items-center my-4">
        <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-white ">
          COMMITTEE
        </h1>
        <div className="flex justify-start gap-3 items-center">
          <hr className="w-1 h-1   bg-white border-0 rounded  " />
          <hr className="w-1 h-1   bg-white border-0 rounded  " />
          <hr className="w-1 h-1   bg-white border-0 rounded  " />
          <hr className="w-24 h-1   bg-white border-0 rounded  " />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          y: 9 % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 2, // Animation duration
          },
        }}
        className="flex"
      >
        <div className="w-1/4  border-r-4 border-yellow-400 text-xl font-semibold">
          {Object.keys(MembersData).map((role) => (
            <button
              key={role}
              className={`text-left w-full ${
                activeTab === role
                  ? "bg-primary"
                  : "bg-primaryLight hover:bg-blue-700"
              } px-4 py-6 `}
              onClick={() => setActiveTab(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="w-3/4 ">
          <div className=" border-yellow-400 bg-primary p-4 h-full">
            <h3 className="text-2xl font-bold mb-4">{activeTab}</h3>
            <ul className="list-inside">
              {MembersData[activeTab].map((member, index) => (
                <li
                  key={index}
                  className="mb-4 text-xl flex items-center gap-5"
                >
                  <SiCodesignal />
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Members;
