import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { IpAddressContext } from "../Context/IpAddressContext";

const SearchBar = () => {
  const [ipInput, setIpInput] = useState("");
  const { fetchIpAddressData } = useContext(IpAddressContext);

  // handle the input and store it in the ipInput state variable
  const inputHandler = (e) => {
    setIpInput(e.target.value);
  };
  // fetch the data when the button is clicked
  const IpSearchHandler = (e) => {
    e.preventDefault();
    fetchIpAddressData(ipInput);
  };

  return (
    <div className="mt-14 ">
      <input
        onChange={inputHandler}
        value={ipInput}
        type="text"
        placeholder="Search for any IP address or Domain"
          className="flex-1 border-none outline-none px-5 py-2.5 rounded-tl-xl rounded-bl-xl w-96 pl-6 !mb-24 relative z-10 bg-white"
        id="search"
      />
      <button
        onClick={IpSearchHandler}
       className="border-none bg-black text-base px-4 py-2.5 rounded-br-xl rounded-tr-xl cursor-pointer text-white mb-8 relative z-10"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default SearchBar;
