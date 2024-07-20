import { Box } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";
import { SettingsColorModeSwitcher } from "../../../components/independent/SettingsColorModeSwitcher";

export default function Settings() {
  // SX
  const contentBgColor = useContentBgColor();

  return (
    <CContainer flex={1}>
      <Box borderBottom={"1px solid var(--divider2)"}>
        <Header title="Settings" />
      </Box>

      <CContainer flex={1} p={5} bg={contentBgColor}>
        <SettingsColorModeSwitcher />
      </CContainer>
    </CContainer>
  );
}
