import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor, useLightDarkColor } from "../../../constant/colors";
import { SettingsColorModeSwitcher } from "../../../components/independent/SettingsColorModeSwitcher";
import { iconSize } from "../../../constant/sizes";

export default function Settings() {
  // SX
  const contentBgColor = useContentBgColor();
  const lightDarkColor = useLightDarkColor();

  return (
    <CContainer flex={1}>
      <Box borderBottom={"1px solid var(--divider2)"}>
        <Header title="Settings" />
      </Box>

      <CContainer flex={1} p={5} bg={contentBgColor} gap={2}>
        <SettingsColorModeSwitcher />

        <HStack
          p={4}
          bg={lightDarkColor}
          borderRadius={8}
          cursor={"pointer"}
          className="clicky"
          _active={{ opacity: 0.6 }}
          mb={6}
        >
          <Icon as={undefined} fontSize={iconSize} />
          <Text>Other Settings</Text>
        </HStack>
      </CContainer>
    </CContainer>
  );
}
