import { useDisclosure } from "@chakra-ui/react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import AlertInfo from "../independent/AlertInfo";
import DataGraphic from "../independent/DataGraphic";
import DataTableDisplay from "../independent/DataTableDisplay";
import DeviceInfo from "../independent/DeviceInfo";
import DeviceLocation from "../independent/DeviceLocation";
import CContainer from "../independent/wrapper/CContainer";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DrawerHeader from "./DrawerHeader";

interface Props {
  item: any;
}

export default function DeviceLocationMarker({ item }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const officeIcon = new L.Icon({
    iconUrl: "/vectors/building.svg",
    iconSize: [64, 64], // Ukuran ikon
  });

  return (
    <>
      <Marker
        //@ts-ignore
        icon={officeIcon}
        position={item.data}
        eventHandlers={{
          click: () => {
            onOpen(); // Menampilkan drawer ketika marker diklik
          },
        }}
      ></Marker>

      <CustomDrawer
        id={`device-location-detail-drawer-${item.id}`}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        header={<DrawerHeader title="Detail" />}
      >
        <CContainer pb={8}>
          <DataGraphic />
          <DataTableDisplay />
          <DeviceInfo />
          <AlertInfo />
          <DeviceLocation />
        </CContainer>
      </CustomDrawer>
    </>
  );
}
