import { HomePageContainer } from "../styles/HomePage.styled";
import SearchBar from "../components/SearchBar";
import IPDetails from "../components/IPDetails";
import Map from "../components/Map";


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

      <Map />
    </>
  );
};

export default HomePage;
