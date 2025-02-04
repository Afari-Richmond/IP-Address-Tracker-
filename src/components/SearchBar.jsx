import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
 
  return (
    <div className="mt-14 ">
      <input
        type="text"
        placeholder="Search for any IP address or Domain"
        className="flex-1  border-none outline-none px-5 py-2.5 rounded-tl-xl rounded-bl-xl w-96 pl-6 !mb-24"
        id="search"
      />
      <button className="border-none bg-black text-base px-4 py-2.5 rounded-br-xl rounded-tr-xl cursor-pointer text-white mb-8">
        <FontAwesomeIcon icon={ faAngleRight} />
      </button>
    </div>
  );
};

export default SearchBar;
