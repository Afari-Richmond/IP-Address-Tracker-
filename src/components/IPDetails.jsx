const IPDetails = () => {
  return (
    <>
      <div
        className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
   flex items-center justify-center text-center
 bg-white w-[900px] h-[150px] text-black rounded-2xl shadow-lg p-6 gap-10 align-center"
      >
        <div className="address flex flex-col items-start border-r-[1px] border-black pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">IP ADDRESS</div>
          <div className="text-[23px] font-semibold">192.212.174.101</div>
        </div>

        <div className="address flex flex-col items-start border-r-[1px] border-black pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">LOCATION</div>
          <div className="text-[23px] font-semibold">Brooklyn, NY 1001 </div>
        </div>

        <div className="address flex flex-col items-start border-r-[1px] border-black pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">TIMEZONE</div>
          <div className="text-[23px] font-semibold">UTC- 5:00</div>
        </div>

        <div className="address flex flex-col items-start  pr-5 -mt-9">
          <div className="text-gray-500 text-[13px]">ISP</div>
          <div className="text-[23px] font-semibold">SpaceX Starlink</div>
        </div>
      </div>
    </>
  );
};

export default IPDetails;






