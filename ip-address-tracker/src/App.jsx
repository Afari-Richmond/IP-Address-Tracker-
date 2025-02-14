import Footer from "./components/Footer";
import { IpAddressProvider } from "./Context/IpContext";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    // Wrap the homepage component in the IP Address provider
    <IpAddressProvider>
      {/* Mount the homepage and footer components */}
      <HomePage />
      <Footer />
    </IpAddressProvider>
  );
};

export default App;

