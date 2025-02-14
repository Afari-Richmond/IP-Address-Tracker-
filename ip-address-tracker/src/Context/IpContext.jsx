import { useState, useEffect } from "react";
// import the IP Address context and create a provider component
import { IpAddressContext } from "./IpAddressContext";
// import my API key from the .env file
const API_KEY = import.meta.env.VITE_IP_API_KEY;
import { resolveDomainToIP } from "../utils/resolveIP";

export const IpAddressProvider = ({ children }) => {
  // state variables to store the IP address, location, timezone, and ISP
  const [ipAddressData, setIpAddressData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIpAddressData = async (input = "") => {
    // Activate the loading spinner
    setLoading(true);
    // Helper function to check if input is a valid IP address
    const isValidIP = (input) => {
      const ipRegex =
        /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;
      return ipRegex.test(input);
    };

    try {
      // set the ipAddress to the input value of the user
      let ipAddress = input;
      // calls the regex function that checks if the input is a valid ipAddress
      // if it is not, it invokes the script to resolve the domain to an ip address and send it to the fetch function
      if (input && !isValidIP(input)) {
        ipAddress = await resolveDomainToIP(input);
        if (!ipAddress) throw new Error("Failed to resolve domain to IP");
      }

      // Fetch the IP address data from the API
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
      );

      // Check if the response is not successful and throw an error
      if (!response.ok) {
        throw new Error("Failed to fetch IP data");
      }

      // Convert the response to JSON
      const data = await response.json();
      console.log(data);

      // Clear any previous errors
      setError(null);
      // Store the IP address data in the state
      setIpAddressData(data);
    } catch (error) {
      // Store the error message in the state
      setError(error.message);
    } finally {
      // Deactivate the loading spinner
      setLoading(false);
    }
  };
  // useEffect hook to fetch the IP address data when the component mounts
  useEffect(() => {
    fetchIpAddressData();
  }, []);

  const IpcontextValue = {
    ipAddressData,
    loading,
    error,
    fetchIpAddressData,
  };

  return (
    <IpAddressContext.Provider value={IpcontextValue}>
      {children}
    </IpAddressContext.Provider>
  );
};
