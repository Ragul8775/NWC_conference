import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 12.818525,
  lng: 80.036843,
};
const Location = () => {
  return (
    <div className="px-6 bg-white my-6 text-gray-500 max-w-7xl w-full ">
      <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-black ">
        Conference Happens in
      </h1>
      <div className="flex justify-start gap-3 items-center mb-4">
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
      </div>
      <div className="flex flex-col md:flex-row  md:justify-between gap-8">
        <div id="location" className="w-1/2">
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          </LoadScript>
        </div>
        <div id="address" className="">
          <h1 className="text-2xl sm:text-2xl font-medium leading-tight mb-2 text-balance text-black ">
            Contact
          </h1>
          <div className="flex justify-start gap-3 items-center mb-4">
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
            <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
          </div>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex items-center gap-2">
              <span>
                <IoPerson className="text-4xl"/>
              </span>
              <div>
                <h3>Dr.Hemamalini V</h3>
                <p>Assistant Professor, NWC, SRMIST</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>
              <FaPhoneAlt className="text-3xl"/>
                
              </span>
              <div>
                <h3 className="text-balance">
                  +91-9626611060 | +91-8838222378 | +91-9894371680 |
                  +91-9962572473
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>
              <IoMdMailOpen className="text-4xl"/>
                
              </span>
              <div>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
