export const resolveDomainToIP = async (domain) => {
    try {
      const response = await fetch(`https://dns.google/resolve?name=${domain}`);
      const data = await response.json();
  
      if (data.Answer) {
        return data.Answer[0].data; // Return the first resolved IP address
      }
  
      throw new Error("No IP address found");
    } catch (error) {
      console.error("Error resolving domain:", error);
      return null;
    }
  };
  