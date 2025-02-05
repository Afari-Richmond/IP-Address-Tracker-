import { useState, useEffect } from "react";
// import the IP Address context and create a provider component
import { IpAddressContext } from "./IpAddressContext";

export const IpAddressProvider = ({ children }) => {
  // state variables to store the IP address, location, timezone, and ISP
  const [ipAddressData, setIpAddressData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch the IP address data
  const fetchIpAddressData = async (ipAddress = "", API_KEY) => {
    // Activate the loading spinner
    setLoading(true);

    try {
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
