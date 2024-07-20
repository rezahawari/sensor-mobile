import { VStack } from "@chakra-ui/react";
import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { LatLng } from "../../constant/interfaces";
import DeviceLocationMarker from "./DeviceLocationMarker";

interface Props {
  center?: LatLng;
}

// Hook untuk mengatur peta saat klik
function SetViewOnClick({ center }: { center: LatLng }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

const devicesLocation = [
  { id: 1, data: { lat: -6.9667, lng: 110.4167 } },
  { id: 2, data: { lat: -6.9967, lng: 110.4367 } },
  { id: 3, data: { lat: -6.9667, lng: 110.4757 } },
  { id: 4, data: { lat: -6.9367, lng: 110.4267 } },
];

export default function LeafletMap({
  center = {
    lat: -6.9667,
    lng: 110.4167,
  },
}: Props) {
  const userIcon = new L.Icon({
    iconUrl: "/vectors/icons/userPin.svg",
    iconSize: [48, 48], // Ukuran ikon
  });

  const containerStyle = {
    width: `100vw`,
    height: `100vh`,
  };

  const minZoomLevel = 3; // Tentukan level zoom minimum di sini
  const maxZoomLevel = 18; // Tentukan level zoom maksimum di sini

  // Tentukan batas maksimum yang dapat digeser
  const maxBounds = L.latLngBounds(
    L.latLng(-90, -180), // Batas bawah kiri (selatan barat)
    L.latLng(90, 180) // Batas atas kanan (utara timur)
  );

  return (
    <VStack position="fixed" left={0} top={0}>
      <MapContainer
        //@ts-ignore
        center={[center.lat, center.lng]}
        zoom={10}
        style={containerStyle as any}
        minZoom={minZoomLevel}
        maxZoom={maxZoomLevel}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0} // Biarkan peta memantul ketika mencapai batas
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          position={[center.lat, center.lng]}
          //@ts-ignore
          icon={userIcon}
        />

        {devicesLocation.map((item, i) => (
          <DeviceLocationMarker key={i} item={item} />
        ))}

        <SetViewOnClick center={center} />
      </MapContainer>
    </VStack>
  );
}
