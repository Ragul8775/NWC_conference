import React from "react";
import RollNo from "../widgets/RollNo";

const Counter = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-blue-700 py-14   flex justify-around shadow-inner">
      <div className="flex flex-col sm:flex-row gap-6 md:gap-12 lg:gap-20 xl:gap-32">
        <div className=" text-center font-bold text-white">
          <RollNo number={705} />
          <h2 className="text-sm font-bold">Total Entries</h2>
        </div>
        <div className="text-6xl text-center font-bold text-white">
          <RollNo number={652} />
          <h2 className="text-sm font-bold">Total No.of full paper</h2>
        </div>
        <div className="text-6xl text-center font-bold text-white">
          <RollNo number={26} />
          <h2 className="text-sm font-bold">Foreign Author Paper</h2>
        </div>
        <div className="text-6xl text-center font-bold text-white">
          <RollNo number={316} />
          <h2 className="text-sm font-bold">Total No of accepted papers</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
