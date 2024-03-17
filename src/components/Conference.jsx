import React, { useState } from "react";

const listItems = [
  "5G and beyond networks",
  "Big data and machine learning for networks",
  " Cellular networks",
  "Cloud computing/mobile cloud computing",
  " Challenged Environments (underwater,underground)",
  "Cross-layer optimization and control",
  " Crowdsourcing,",
  "CubeSats",
  "Cyber-physical systems",
  "Datacenter networking",
  "5G and beyond networks",
  "Big data and machine learning for networks",
  " Cellular networks",
  "Cloud computing/mobile cloud computing",
  " Challenged Environments (underwater,underground)",
  "Cross-layer optimization and control",
  " Crowdsourcing,",
  "CubeSats",
  "Cyber-physical systems",
  "Datacenter networking",
  "5G and beyond networks",
  "Big data and machine learning for networks",
  " Cellular networks",
  "Cloud computing/mobile cloud computing",
  " Challenged Environments (underwater,underground)",
  "Cross-layer optimization and control",
  " Crowdsourcing,",
  "CubeSats",
  "Cyber-physical systems",
  "Datacenter networking",
];

const Conference = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="px-6 bg-blue-100 my-10 max-w-7xl w-full">
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-balance  text-center">
        Conference Topics
      </h1>
      <div className="flex justify-center gap-3 items-center pl-4">
        <hr className="w-1 h-2   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-2   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-2  bg-blue-500 border-0 rounded  " />
        <hr className="w-36 h-2   bg-blue-500 border-0 rounded  " />
      </div>
      <section className="shadow-xl bg-white my-8">
        <div className="w-full border-left-4 border-yellow-400 flex justify-between items-center">
          <div className="py-8 px-8 text-3xl font-semibold w-2/4">
            <h1 className="text-pretty">
              Topics of interest include , but
              <span className="text-blue-600"> are not limited to</span>
            </h1>
          </div>
          <div className="w-2/4 flex justify-end px-20">
            <h2
              className="border-b-4 border-yellow-400 text-xl font-semibold rounded-md bg-blue-800 cursor-pointer text-white flex justify-center px-3 py-3"
              onClick={() => setShowModal(true)}
            >
              Topics Covered
            </h2>
          </div>
        </div>

        {showModal ? (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="flex items-center ">
                      <h2 className="text-xl leading-6 font-medium text-gray-900">
                        Conference Topics
                      </h2>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      >
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="mt-2">
                      <ul className="text-left h-80 overflow-y-auto list-disc list-inside">
                        {listItems.map((topic, index) => (
                          <li key={index} className="mb-1 text-sm">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Conference;
