import { IpAddressContext } from "../Context/IpAddressContext";
import { useContext } from "react";
import "../styles/IPDetails.css";

const IPDetails = () => {
  const { ipAddressData } = useContext(IpAddressContext);

  // checks if IP address data is still loading and shows the loading spinner
  if (!ipAddressData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
        <h1>Loading...</h1>
      </div>
    );
  }
  // extract the data from the result from the API request
  const ipAddress = ipAddressData.ip;
  const location =
    ipAddressData.location.region + ", " + ipAddressData.location.country;
  const timezone = ipAddressData.location.timezone;
  const isp = ipAddressData.isp;

  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  flex flex-wrap items-center justify-center text-center
  bg-white max-w-[90%] w-full md:w-[900px] h-auto min-h-[150px] text-black 
  rounded-2xl shadow-lg  gap-6 "
      >
        {/* //an array of the labels together with the corresponding data from the API request */}
        {[
          { label: "IP ADDRESS", value: ipAddress },
          { label: "LOCATION", value: location },
          { label: "TIMEZONE", value: "UTC" + " " + timezone },
          { label: "ISP", value: isp },
          {
            /* //map through the data and display the required labbel and their corresponding data */
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start max-w-[220px] min-w-[150px] break-all whitespace-normal"
          >
            <div className="text-gray-500 text-[13px]">{item.label}</div>
            <div className="text-[20px] font-semibold break-all whitespace-normal">
              {item.value || ""}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IPDetails;

//border-r-[1px] border-black pr-5 -mt-9
