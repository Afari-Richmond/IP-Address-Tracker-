import { HomePageContainer } from "../styles/HomePage.styled";
import SearchBar from "../components/SearchBar";
import IPDetails from "../components/IPDetails";

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <div className="background">
          <div className="text-4xl text-white !mt-20">IP Address Tracker</div>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>

       
      </HomePageContainer>
      <div className="IP-details">
          <IPDetails />
        </div>
    </>
  );
};

export default HomePage;
