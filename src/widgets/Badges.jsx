import React from "react";
import Accrediation from "../assets/accrediation.png";
import Ranking from "../assets/ranking.png";
import Students from "../assets/Students.png";
import Teachers from "../assets/Teachers.png";
const Badges = () => {
  return (
    <div className=" border-2 shadow-lg rounded-xl flex justify-around items-center px-4 py-4">
      <div className="flex flex-col gap-3 ">
        <img src={Accrediation} width={80} />
        <div>
          <h2 className="font-bold text-center font-main text-xl text-primaryLight">
            A++
          </h2>
          <p className="font-bold text-center font-main opacity-80">NAAC</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <img src={Ranking} width={75} />
        <div>
          <h2 className="font-bold text-center font-main text-xl text-primaryLight">
            18<sup>th</sup>
          </h2>
          <p className="font-bold text-center font-main opacity-80">NIRF</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <img src={Students} width={75} />
        <div>
          <h2 className="font-bold text-center font-main text-xl text-primaryLight">
            67,000
          </h2>
          <p className="font-bold text-center font-main opacity-80">Students</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <img src={Teachers} width={75} />
        <div>
          <h2 className="font-bold text-center font-main text-xl text-primaryLight">
            5,000+
          </h2>
          <p className="font-bold text-center font-main opacity-80">Teachers</p>
        </div>
      </div>
    </div>
  );
};

export default Badges;
