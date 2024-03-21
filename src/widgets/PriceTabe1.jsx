import React from "react";

const PriceTabe1 = () => {
  return (
    <div className="  my-4">
      <table className="w-full text-xl text-left rtl:text-right text-gray-500 font-main">
        <thead className="text-xl text-white uppercase bg-primaryLight">
          <tr>
            <th scope="col" className="px-6 py-3">
              Indian Author
            </th>
            <th scope="col" className="px-6 py-3">
              Non- IEEE members(₹)
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b text-wrap ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap text-wrap"
            >
              Student ( UG / PG / Research Scholar)
            </th>
            <td className="px-6 py-4">₹5000</td>
            <td className="px-6 py-4">₹4000</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-wrap text-gray-900 whitespace-nowrap "
            >
              Faculty / Academician
            </th>
            <td className="px-6 py-4">₹6000</td>
            <td className="px-6 py-4">₹5000</td>
          </tr>
          <tr className="bg-white  border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-wrap text-gray-900 whitespace-nowrap "
            >
              Corporate Sector / Others
            </th>
            <td className="px-6 py-4">₹9000</td>
            <td className="px-6 py-4">₹7000</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-bold text-wrap text-gray-900 whitespace-nowrap "
            >
              Foreign Author
            </th>
            <td className="px-6 py-4">Non- IEEE members ($)</td>
            <td className="px-6 py-4">IEEE members ($)</td>
          </tr>
          <tr className="bg-white ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-wrap text-gray-900 whitespace-nowrap "
            >
              Academic / Research Scholar / Corporate Sector
            </th>
            <td className="px-6 py-4">₹230</td>
            <td className="px-6 py-4">₹180</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceTabe1;
