import { IpAddressContext } from "../Context/IpAddressContext";
import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./icon";

const Map = () => {
  const { ipAddressData } = useContext(IpAddressContext);

  // Ensure lat & lng exist before using them
  const latitude = ipAddressData?.location?.lat || 0;
  const longitude = ipAddressData?.location?.lng || 0;

  console.log(latitude, longitude); 

  return (
    <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <MapContainer
        className="mt-[300px]"
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={[latitude, longitude]}> {/* Corrected */}
          <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
