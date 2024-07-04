import { Box } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";

export default function Maps() {
  // SX
  const contentBgColor = useContentBgColor();

  return (
    <CContainer>
      <Box borderBottom={"1px solid var(--divider2)"}>
        <Header title="Maps" />
      </Box>

      <CContainer bg={contentBgColor}></CContainer>
    </CContainer>
  );
}
