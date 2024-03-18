import React from "react";
import intro_1 from "../assets/intro-1.jpeg";

const Introduction = () => {
  return (
    <div className="px-6 bg-blue-100 my-6 max-w-7xl">
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-balance  text-center">
        Second International Conference On Recent Trends In Data Science And Its Applications
      </h1>
      <div className="flex justify-center gap-3 items-center">
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-36 h-1   bg-blue-500 border-0 rounded  " />
      </div>
      <section className="py-12">
        <h1 className="text-2xl font-semibold">About ICRTDA 2024</h1>
        <div className="flex justify-start gap-3 items-center  py-2">
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
          <hr className="w-16 h-1   bg-blue-500 border-0 rounded  " />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-3">
          <div className="flex-1 text-xl">
            <p>
            ICRTDA 2023 is being organized as an in-person participation event to be held at SRM Institute of Science and Technology, Kattankulathur on 30th and 31st, March 2023. The conference will focus on the Trends and Recent Advances in Data Science and its Applications. Papers accepted for presentation will be published in the Scopus Indexed Conference proceeding.
            </p>
          </div>
          <div className="hidden md:block flex-1 md:w-64 md:h-64">
            <img src={intro_1} className="w-full h-full object-coverl" alt="" />
          </div>
        </div>
      </section>
      <div
        id="button"
        className="flex flex-col sm:flex-row justify-center items-center"
      >
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 focus:outline-none flex justify-center items-center gap-1"
        >
          About Department
          <span>
            <svg
              className="w-8 h-8 text-white "
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 focus:outline-none flex justify-center items-center gap-1"
        >
          Online Session
          <span>
            <svg
              className="w-8 h-8 text-white "
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 focus:outline-none flex justify-center items-center gap-1"
        >
          Offline Session
          <span>
            <svg
              className="w-8 h-8 text-white "
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 focus:outline-none flex justify-center items-center gap-1"
        >
          Invitation
          <span>
            <svg
              className="w-8 h-8 text-white "
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
