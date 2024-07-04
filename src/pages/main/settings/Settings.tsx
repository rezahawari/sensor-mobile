import { Box } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";

export default function Settings() {
  return (
    <CContainer>
      <Box borderBottom={"1px solid var(--divider2)"}>
        <Header title="Settings" />
      </Box>

      <CContainer p={5}></CContainer>
    </CContainer>
  );
}
