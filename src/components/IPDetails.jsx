import { IpAddressContext } from "../Context/IpAddressContext";
import { useContext } from "react";
import "../styles/IPDetails.css";

const IPDetails = () => {
  const { ipAddressData } = useContext(IpAddressContext);

  if (!ipAddressData) {
    return (
      <div className="spinner">
        <div className="spin"></div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const ipAddress = ipAddressData.ip;
  const location =
    ipAddressData.location.city +
    ", " +
    ipAddressData.location.region +
    ", " +
    ipAddressData.location.country;
  const timezone = ipAddressData.location.timezone;
  const isp = ipAddressData.isp;

  return (
    <>
      <div
        className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
   flex items-center justify-center text-center
 bg-white w-[900px] h-[150px] text-black rounded-2xl shadow-lg p-6 gap-10 align-center"
      >
        <div className="address flex flex-col items-start border-r-[1px] border-black pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">IP ADDRESS</div>
          <div className="text-[23px] font-semibold">{ipAddress}</div>
        </div>

        <div className="address flex flex-col items-start border-r-[1px] border-black pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">LOCATION</div>
          <div className="text-[23px] font-semibold">{location} </div>
        </div>

        <div className="address flex flex-col items-start border-r-[1px] border-black pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">TIMEZONE</div>
          <div className="text-[23px] font-semibold">{timezone}</div>
        </div>

        <div className="address flex flex-col items-start  pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">ISP</div>
          <div className="text-[23px] font-semibold"> {isp} </div>
        </div>
      </div>
    </>
  );
};

export default IPDetails;
