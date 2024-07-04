import SensorMaps from "../../../components/dependent/SensorMaps";
import Config from "../../../components/independent/Config";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";

export default function Home() {
  // SX
  const contentBgColor = useContentBgColor();

  return (
    <CContainer>
      {/* Content */}
      <CContainer bg={contentBgColor} overflowY={"auto"}>
        <SensorMaps />
      </CContainer>

      <Config />
    </CContainer>
  );
}
