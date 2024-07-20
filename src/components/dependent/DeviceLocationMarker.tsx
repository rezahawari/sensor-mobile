import { useDisclosure } from "@chakra-ui/react";
import DataGraphic from "../independent/DataGraphic";
import CContainer from "../independent/wrapper/CContainer";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DrawerHeader from "./DrawerHeader";
import DataTableDisplay from "../independent/DataTableDisplay";
import DeviceInfo from "../independent/DeviceInfo";
import AlertInfo from "../independent/AlertInfo";
import DeviceLocation from "../independent/DeviceLocation";
import L from "leaflet";
import { Marker } from "react-leaflet";

interface Props {
  item: any;
}

export default function DeviceLocationMarker({ item }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const officeIcon = new L.Icon({
    iconUrl: "/vectors/building.svg",
    iconSize: [48, 48], // Ukuran ikon
  });

  // SX

  return (
    <>
      <Marker
        //@ts-ignore
        icon={officeIcon}
        position={item.data}
        onClick={onOpen}
        label={"Ini Label"}
      />

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
