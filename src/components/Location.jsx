import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { motion } from "framer-motion";
const libraries = ["places"];
const mapContainerStyle = {
  width: "600px",
  height: "50vh",
};
const center = {
  lat: 12.826258659362793,
  lng: 80.0444107055664, 
};

const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_SOME_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        y: 8 % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 2, // Animation duration
        },
      }}
      className="px-6 bg-white my-6 text-gray-500 max-w-7xl w-full "
    >
      <h1 className="text-3xl sm:text-3xl font-medium leading-tight mb-4 text-balance text-black ">
        Conference Happens in
      </h1>
      <div className="flex justify-start gap-3 items-center mb-4">
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-1   bg-blue-500 border-0 rounded  " />
        <hr className="w-24 h-1   bg-blue-500 border-0 rounded  " />
      </div>
      <div className="flex flex-col md:flex-row  md:justify-between gap-16">
        {/*  */}
        <div className="flex items-center">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>

        <div id="address" className=" text-2xl font-main">
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
                <IoPerson className="text-4xl" />
              </span>
              <div>
                <h3>Dr. P. Kanmani</h3>
                <p>Assistant Professor, DSBS, SRMIST</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaPhoneAlt className="text-3xl" />
              </span>
              <div>
                <h3 className="text-balance">
                  +91-9976916147
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <IoMdMailOpen className="text-4xl" />
              </span>
              <div>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
