import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
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
      <div className="flex justify-between flex-col md:flex-row">
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  class="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              <div>
                <h3>Dr.Hemamalini V</h3>
                <p>Assistant Professor, NWC, SRMIST</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <svg
                  class="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>
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
                <svg
                  class="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0-9 6.5L3 8"
                  />
                </svg>
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
