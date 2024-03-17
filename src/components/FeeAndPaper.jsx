import React from "react";
import poster from "../assets/poster.webp";
import PriceTabe1 from "../widgets/PriceTabe1";
const FeeAndPaper = () => {
  const emailAddress = "example@example.com";
  return (
    <div className="px-6 my-6 text-gray-500 max-w-7xl w-full">
      <section className="">
        <div className="; flex flex-col">
          <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-black ">
            Registration Fee
          </h1>
          <div className="flex justify-start gap-3 items-center">
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
          </div>
          <PriceTabe1 />
        </div>
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
          <p className="mt-4 text-xl">
            Authors are invited to submit the papers through
            icnwc.2023@srmist.edu.in by 31st January 2023 (Extended till 14th
            Feb 2023). Submissions must be original and should not have been
            published previously or be under consideration for publication while
            being evaluated for this conference.
          </p>
          <p className="mt-4 text-xl">
            Accepted and presented papers will be published in the IEEE ICNWC
            2023 Conference Proceedings and submitted to IEEE Xplore® for
            inclusion which will be indexed in Scopus. Full details of
            submission procedures and requirements for authors are available at
            the conference website..
          </p>
          <div className="mt-4 text-xl">
            <h2 className="font-bold">Paper submission through</h2>
            <a
              href={`mailto:${emailAddress}`}
              className="text-blue-800 hover:underline"
            >
              example@example.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeeAndPaper;
