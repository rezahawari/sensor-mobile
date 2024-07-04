import { VStack } from "@chakra-ui/react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback } from "react";
import DeviceLocation from "./DeviceLocation";

const devicesLocation = [
  { id: 1, data: { lat: -6.9667, lng: 110.4167 } },
  { id: 2, data: { lat: -6.9967, lng: 110.4367 } },
  { id: 3, data: { lat: -6.9667, lng: 110.4757 } },
  { id: 4, data: { lat: -6.9367, lng: 110.4267 } },
];

export default function SensorMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBtzPbevaLoWycQ3f07Ooctf_R0XtEOo-Q",
  });

  // const [map, setMap] = useState<google.maps.Map | null>(null); // Tipe data tambahan di sini
  // console.log(map);

  const onLoad = useCallback(function callback(map: any) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    // setMap(null);
  }, []);

  // SX
  const containerStyle = {
    width: "100vw",
    height: "calc(100vh - 48px - 85px)",
  };

  const center = {
    lat: -6.9667,
    lng: 110.4167,
  };

  const officeIcon = {
    url: "/vectors/icons/hospital.svg", // Atur URL gambar pin
  };

  return isLoaded ? (
    <VStack className="sensor-maps">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true, // Menonaktifkan tampilan kontrol default
          zoomControl: false, // Menonaktifkan kontrol zoom
          streetViewControl: false, // Menonaktifkan kontrol street view
          fullscreenControl: false, // Menonaktifkan tombol full screen
          gestureHandling: "cooperative", // Menetapkan gestureHandling ke cooperative
        }}
      >
        <Marker position={center} icon={officeIcon} />

        {devicesLocation.map((item, i) => (
          <DeviceLocation key={i} item={item} />
        ))}
      </GoogleMap>
    </VStack>
  ) : (
    <></>
  );
}
