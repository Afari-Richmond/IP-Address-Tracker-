import { HomePageContainer } from "../styles/HomePage.styled";
import SearchBar from "../components/SearchBar";

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
    
    </>
  );
};

export default HomePage;
