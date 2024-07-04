import { useDisclosure } from "@chakra-ui/react";
import { Marker } from "@react-google-maps/api";
import DataGraphic from "../../pages/main/home/sections/DataGraphic";
import CContainer from "../independent/wrapper/CContainer";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DrawerHeader from "./DrawerHeader";

interface Props {
  item: any;
}

export default function DeviceLocation({ item }: Props) {
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
        <CContainer px={6} pb={8}>
          <DataGraphic />
        </CContainer>
      </CustomDrawer>
    </>
  );
}
