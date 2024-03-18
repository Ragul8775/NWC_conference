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
          Prospective authors are kindly invited to submit full text papers including results, tables, figures, and references. Full text papers (.pdf, .doc) will be accepted by Paper Submission Link tab at the top under “About ICRTDA 2023”. All submitted articles should report original, previously unpublished research results, experimental or theoretical. Articles submitted to the Conference should meet these criteria and must not be under consideration for publication elsewhere.
          </p>
          <p className="mt-4 text-xl">
          All registered, selected and domain specific papers will be published in UGC / Scopus / Google Scholar Indexed Journals.
          </p>
          <ul className="text-xl list-disc mt-2">
            <li className="mb-2 ml-4">International Journal of Communication Networks and Information Security (IJCNIS)
</li>
            <li className="mb-2 ml-4">Educational Administration: Theory and Practice (Scopus Indexed Journal)
</li>
            <li className="mb-2 ml-4">Science Progress and Research (SPR) journal 
</li>
            <li className="mb-2 ml-4">AIP Conference Proceedings (Awaiting Approval)
</li>
            <li className="mb-2 ml-4">Journal of Computer Science implications
</li>
            <li className="mb-2 ml-4">IOS series Journal (Awaiting Approval)
</li>
          </ul>
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
