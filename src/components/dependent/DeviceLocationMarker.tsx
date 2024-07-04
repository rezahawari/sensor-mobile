import { useDisclosure } from "@chakra-ui/react";
import { Marker } from "@react-google-maps/api";
import DataGraphic from "../independent/DataGraphic";
import CContainer from "../independent/wrapper/CContainer";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DrawerHeader from "./DrawerHeader";
import DataTableDisplay from "../independent/DataTableDisplay";
import DeviceInfo from "../independent/DeviceInfo";
import AlertInfo from "../independent/AlertInfo";
import DeviceLocation from "../independent/DeviceLocation";

interface Props {
  item: any;
}

export default function DeviceLocationMarker({ item }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const officeIcon = {
    url: "/vectors/building.svg", // Atur URL gambar pin
  };

  // SX

  return (
    <>
      <Marker
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
