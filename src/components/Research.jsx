import React from "react";
import intro_1 from "../assets/intro-1.jpeg";
const Research = () => {
  return (
    <div className="px-6 bg-blue-100 my-6 max-w-7xl">
      <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance  text-center">
        Research Slam 2023 Pre-Event
      </h1>
      <div className="flex justify-center gap-3 items-center">
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
      </div>
      <section className="py-12">
        <div className="flex flex-col gap-4 text-wrap text-xl">
          <p>
            We at SRM always try innovative ways to encourage and nurture
            research in the best possible way. In this direction The Department
            of Networking and Communications, School of Computing has come out
            with a unique event inspired from International research forums, the
            RESEARCH SLAM 2023 first one it’s kind @SRMIST as a pre-event for
            the IEEE International Conference on Networking and Communications
            2023 (ICNWC 2023).
          </p>
          <p>
            The Research Slam is a contest allowing researchers to showcase
            their research projects to their peers and the broader public in a
            relaxed and joyful atmosphere.
          </p>
          <p>
            The Slam will offer the researchers a platform to communicate with
            peers about their research or creative activity through any of their
            artistic talents that are entertaining and easy to understand by the
            audience.  This will also help the researchers to highlight their
            contribution towards societal development.
          </p>
          <ul className="max-w-md space-y-1 list-disc list-inside ">
            <li>Research Slam Rule book link: bit.ly/3y82XoM</li>
            <li>Research Slam Registration Link: bit.ly/3lZcTho</li>
            <li>Conference Link: bit.ly/ieeeConference</li>
          </ul>
          <h3 className="font-semibold">Who is Eligible?</h3>
          <ol className="max-w-md space-y-1 list-decimal list-inside ">
            <li>Researchers (faculty members/scholars)</li>
            <li>Students who are aspiring to take up higher studies</li>
          </ol>
          <h3 className="font-semibold">Domain: all faculties/disciplines</h3>
          <p className="text-wrap">
            Participants are invited to submit short video proposals by 23rd
            March 2023 (Hard deadline) for an opportunity to present during the
            event.   Participants selected to present during the Slam on 4th
            April 2023 (Final Round). Following the presentations, the audience
            will vote to determine a winner along with the judges.
          </p>
        </div>
      </section>

      <button
        type="button"
        className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 focus:outline-none flex justify-center items-center gap-1"
      >
        Poster
        <span>
          <svg
            class="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Research;
