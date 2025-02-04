//importing the modules for the routes and the HomePage component

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// import the usesate hook to handle the state of the component
import { useEffect, useState } from "react";
// Load API key from environment variables
const API_KEY = import.meta.env.VITE_IP_API_KEY;
console.log(API_KEY);

const App = () => {
  // variables to store the IP address, location, timezone, and ISP
  const [ipAddress, setIpAddress] = useState("8.8.8.8"); // the user inputs the ip address
  const [ipAddressData, setIpAddressData] = useState({}); // the data fetched from the API
  const [loading, setLoading] = useState(false); // to show the loading spinner
  const [error, setError] = useState(false); // to show the error message

  // function to fetch the data from the API
  const fetchIpAddressData = async () => {
    // Activate the loading spinner
    setLoading(true);
    //
    try {
      //
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
      );
// if the response is not ok, throw an error
      if (!response.ok) {
        throw new Error("Something went wrong!, Failed to Fetch Data");
      }

      const data = await response.json();
      console.log(data);
      setIpAddressData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpAddressData();
  }, []);
  return (
    <>
       {/* Mount the homepage and footer components */}
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
