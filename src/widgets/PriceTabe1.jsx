import React from "react";

const PriceTabe1 = () => {
  return (
    <div className="flex flex-col gap-4  my-4">
      <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-white uppercase bg-blue-700">
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
          <tr className="bg-white border-b text-wrap dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap text-wrap dark:text-white"
            >
              Student ( UG / PG / Research Scholar)
            </th>
            <td className="px-6 py-4">-/</td>
            <td className="px-6 py-4">-/</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-wrap text-gray-900 whitespace-nowrap dark:text-white"
            >
              Faculty / Academician
            </th>
            <td className="px-6 py-4">-/</td>
            <td className="px-6 py-4">-/ </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-wrap text-gray-900 whitespace-nowrap dark:text-white"
            >
              Corporate Sector / Others
            </th>
            <td className="px-6 py-4">-/</td>
            <td className="px-6 py-4">-/</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-white uppercase bg-blue-700">
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-wrap text-gray-900 whitespace-nowrap dark:text-white"
            >
              Academic / Research Scholar / Corporate Sector
            </th>
            <td className="px-6 py-4">-/</td>
            <td className="px-6 py-4">-/</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceTabe1;
