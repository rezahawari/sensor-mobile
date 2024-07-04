import * as React from "react";
import {
  useColorMode,
  IconButtonProps,
  Icon,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { RiMoonLine } from "@remixicon/react";
import { iconSize } from "../../constant/sizes";
import { useLightDarkColor } from "../../constant/colors";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const SettingsColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (
  props
) => {
  const { toggleColorMode, colorMode } = useColorMode();

  // SX
  const lightDarkColor = useLightDarkColor();

  return (
    <HStack
      p={4}
      bg={lightDarkColor}
      borderRadius={8}
      cursor={"pointer"}
      className="clicky"
      _active={{ opacity: 0.6 }}
      mb={6}
      onClick={toggleColorMode}
    >
      <Icon as={RiMoonLine} fontSize={iconSize} />
      <Text>Dark Mode</Text>

      <Box
        h={"10px"}
        w={"10px"}
        borderRadius={"full"}
        bg={colorMode === "dark" ? "green.500" : "var(--divider3)"}
        ml={"auto"}
      />
    </HStack>
  );
};
