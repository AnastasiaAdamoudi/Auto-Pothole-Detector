import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapPopups } from './index.js';
import { potholeData } from "../../data/potholeData.js";

const MainMap = () => {

  const [visibleMarkers, setVisibleMarkers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextMarkerIndex = visibleMarkers.length;
      if (nextMarkerIndex < potholeData.length) {
        setVisibleMarkers(prevMarkers => [...prevMarkers, potholeData[nextMarkerIndex]]);
      }
    }, 1300);

    return () => clearTimeout(timer);
  }, [visibleMarkers]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full inset-0">
      <MapContainer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        center={[51.575008226807874, 0.44063692300522156]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {visibleMarkers.map((pothole, index) => (
          <Marker
            key={index}
            position={[pothole.potholeLatitude, pothole.potholeLongitude]}
          >
            <Popup>
              <MapPopups pothole={pothole} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MainMap;
