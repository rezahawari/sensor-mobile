import { useEffect, useState } from "react";
import SensorMaps from "../../../components/dependent/SensorMaps";
import Config from "../../../components/independent/Config";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";
import { LatLong } from "../../../constant/interfaces";
import getLocation from "../../../lib/getLocation";

export default function Home() {
  const [center, setCenter] = useState<LatLong | undefined>(undefined);

  useEffect(() => {
    getLocation().then((myLoc) => {
      setCenter(myLoc);
    });
  }, []);

  // SX
  const contentBgColor = useContentBgColor();

  return (
    <CContainer>
      {/* Content */}
      <CContainer bg={contentBgColor} overflowY={"auto"}>
        {center && <SensorMaps />}
      </CContainer>

      <Config />
    </CContainer>
  );
}
