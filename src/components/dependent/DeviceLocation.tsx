import { useDisclosure } from "@chakra-ui/react";
import { Marker } from "@react-google-maps/api";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DataGraphic from "../../pages/main/home/sections/DataGraphic";

interface Props {
  item: any;
}

export default function DeviceLocation({ item }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const officeIcon = {
    url: "/vectors/building.svg", // Atur URL gambar pin
  };

  return (
    <>
      <Marker icon={officeIcon} position={item.data} onClick={onOpen} />

      <CustomDrawer
        id={`device-location-detail-drawer-${item.id}`}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <DataGraphic />
      </CustomDrawer>
    </>
  );
}
