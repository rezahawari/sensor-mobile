import { Checkbox, HStack, Text } from "@chakra-ui/react";
import CContainer from "../../../../components/independent/wrapper/CContainer";
import { useLightDarkColor } from "../../../../constant/colors";

export default function DataGraphic() {
  // SX
  const lightDarkColor = useLightDarkColor();

  return (
    <CContainer bg={lightDarkColor} borderRadius={12} p={4} flex={0}>
      <HStack justify={"space-between"} mb={4}>
        <Text as={"h2"} fontWeight={600}>
          Data Graphic
        </Text>

        <Checkbox colorScheme="dl" size={"sm"}>
          <Text fontSize={12}>Alert threshold line</Text>
        </Checkbox>
      </HStack>

      <CContainer>
        <Text opacity={0.4}>Ini ceritanya line chart</Text>
      </CContainer>
    </CContainer>
  );
}
