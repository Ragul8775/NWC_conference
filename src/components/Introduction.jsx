import React from "react";
import Building from "../assets/Building2.jpg";
import Building2 from "../assets/Building3.webp";
import lab from "../assets/lab.jpg";
import audi from "../assets/audi.jpg";
import Badges from "../widgets/Badges";

const Introduction = () => {
  return (
    <div className="px-6 bg-white  my-8 max-w-7xl ">
      <div className="felx flex-col">
        <section className="bg-white">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-3xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primaryLight font-main">
                About SRM
              </h2>
              <p className="mb-4 font-main font-medium">
                SRM Institute of Science and Technology is a part of the
                prestigious SRM Group of Educational Institutions, one of
                India’s leading institutes. It is established in 1985 by the
                Founder Chancellor, Dr. T. R. Paarivendhar. Now it is
                functioning in campuses located at Kattankulathur, Vadapalani,
                and Ramapuram in Tamil Nadu and Modi Nagar (in UP) & Sonepat (in
                Haryana) – both of which are located near Delhi NCR, Amaravati
                (in AP), Gangtok (in Sikkim) The group has more than 67,000
                students and over 5,000 faculty members to its credit. The areas
                of excellence range from engineering and medicine to management
                and humanities. The Institution has moved up through
                international alliances and collaborative initiatives to achieve
                global excellence. SRMIST International Advisory Board (IAB) is
                actively involved in building a stronger international dimension
                in research and teaching methodology, which creates avenues for
                research and successful careers. SRMIST is accredited by NAAC
                with “A++” Grade and placed 18th position in NIRF Ranking in the
                academic year 2023 under university category. It is also
                positioned 301 to 350 in QS University Rankings – Asia.
              </p>
              <p className="mb-4 font-main font-medium">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
              <Badges />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <img
                className="w-full md:w-1/2 lg:w-3/4 xl:w-full rounded-lg"
                src={Building}
                alt="office content 1"
              />
              <img
                class="mt-4 w-full md:w-1/2 lg:w-3/4 xl:w-full rounded-lg"
                src={audi}
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <hr class="h-px my-8 bg-primaryLight border-0 " />
        <section className="bg-white">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-3xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className=" hidden md:flex flex-wrap justify-center gap-4 mt-8">
              <img
                className="w-full md:w-1/2 lg:w-3/4 xl:w-full rounded-lg"
                src={lab}
                alt="office content 1"
              />
              <img
                class="mt-4 w-full md:w-1/2 lg:w-3/4 xl:w-full rounded-lg"
                src={Building2}
                alt="office content 2"
              />
            </div>
            <div className="font-light text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primaryLight font-main">
                About the department
              </h2>
              <p className="mb-4 font-main font-medium">
                The School of Computing is the largest in the SRM family with
                over 10000 students and 500 faculty members. The School hosts
                four departments namely Computing Technologies, Networking and
                Communications, Computational Intelligence and Data Science and
                Business Systems. The department of Data Science and Business
                Systems (DSBS) started in 2021 with the pivotal objective of
                evolving students to acquire information and knowledge by
                acquainting technical expertise and skills, thus transforming
                them into entrepreneurs and product developers pertaining to the
                field of Data Science and Business analytics. Leveraging the
                ever-growing business data, the department ensures that the
                students acquire sound fundamentals in theory and project-based
                learning experience in various data science related tools and
                technologies. Augmenting to this the department is strongly
                committed to impart sound domain knowledge in mathematics,
                business system and engineering sciences.
              </p>
              <p className="mb-4 font-main font-medium">
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
