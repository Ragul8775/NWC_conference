import React, { useState } from "react";

const MembersData = {
  "CHIEF PATRONS": [
    "Dr.T.R.Paarivendhar, Chancellor, SRMIST",

    " Dr. P.Ravi Pachamoothoo, Pro-Chancellor (Administration), SRMIST",

    " Dr.P.Sathyanarayanan, Pro-Chancellor (Academics), SRMIST",

    "  Dr.R.Shivakumar, Vice President, SRMIST]",
  ],
  PATRONS: [
    " Dr.C.Muthamizhchelvan, Vice Chancellor, SRMIST",

    "Dr.S.Ponnusamy, Registrar, SRMIST",

    "Dr.T.V.Gopal, Dean (CET), SRMIST",

    "Dr.B.Neppolian, Dean (Research), SRMIST",
  ],
  "ADVISORY BOARD MEMBERS": [
    "Dr.Revathi Venkataraman, Professor & Chairperson, School of Computing, SRMIST.",

    "Dr.Annapurani Panaiyappan.K, Professor & Head, Networking and Communications, SRMIST",

    " Dr.M.Pushpalatha, Professor & Head, Computing Technologies, SRMIST",

    " Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",

    " Dr.R.Annie Uthra, Professor & Head, Computational Intelligence, SRMIST",
  ],
  "ADVISORY COMMITTEE ": [
    "Dr.Revathi Venkataraman, Professor & Chairperson, School of Computing, SRMIST.",

    "Dr.Annapurani Panaiyappan.K, Professor & Head, Networking and Communications, SRMIST",

    " Dr.M.Pushpalatha, Professor & Head, Computing Technologies, SRMIST",

    " Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",

    " Dr.R.Annie Uthra, Professor & Head, Computational Intelligence, SRMIST",
    "Dr.Revathi Venkataraman, Professor & Chairperson, School of Computing, SRMIST.",

    "Dr.Annapurani Panaiyappan.K, Professor & Head, Networking and Communications, SRMIST",

    " Dr.M.Pushpalatha, Professor & Head, Computing Technologies, SRMIST",

    " Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",

    " Dr.R.Annie Uthra, Professor & Head, Computational Intelligence, SRMIST",
  ],
  "CONFERENCE CHAIR": [
    " Dr.M.Pushpalatha, Professor & Head, Computing Technologies, SRMIST",

    " Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",

    " Dr.R.Annie Uthra, Professor & Head, Computational Intelligence, SRMIST",
    "Dr.Revathi Venkataraman, Professor & Chairperson, School of Computing, SRMIST.",

    "Dr.Annapurani Panaiyappan.K, Professor & Head, Networking and Communications, SRMIST",

    " Dr.M.Pushpalatha, Professor & Head, Computing Technologies, SRMIST",

    " Dr.M.Lakshmi, Professor & Head, Data Science and Business Systems, SRMIST",
  ],
  " CONVENER": ["Dr. Sasikala E, Professor, DSBS, SRMIST"],
};
const Members = () => {
  const [activeTab, setActiveTab] = useState("CHIEF PATRONS");
  return (
    <div className=" bg-blue-900 text-white max-w-7xl w-full h-auto font-main">
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
      <div className="flex">
        <div className="w-1/4  border-r-4 border-yellow-400 text-xl font-semibold">
          {Object.keys(MembersData).map((role) => (
            <button
              key={role}
              className={`text-left w-full ${
                activeTab === role
                  ? "bg-blue-600"
                  : "bg-blue-900 hover:bg-blue-700"
              } px-4 py-6 `}
              onClick={() => setActiveTab(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="w-3/4 ">
          <div className=" border-yellow-400 bg-blue-900 p-4 h-full">
            <h3 className="text-2xl font-bold mb-4">{activeTab}</h3>
            <ul className="list-disc list-inside">
              {MembersData[activeTab].map((member, index) => (
                <li key={index} className="mb-4 text-xl">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
