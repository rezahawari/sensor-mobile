import { useDisclosure } from "@chakra-ui/react";
import { Marker } from "@react-google-maps/api";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DataGraphic from "../../pages/main/home/sections/DataGraphic";
import CContainer from "../independent/wrapper/CContainer";
import { useContentBgColor } from "../../constant/colors";
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
  const contentBgColor = useContentBgColor();

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
        header={<DrawerHeader title="Detail" bg={contentBgColor} />}
      >
        <CContainer px={5} pb={8} bg={contentBgColor}>
          <DataGraphic />
        </CContainer>
      </CustomDrawer>
    </>
  );
}
