import { HStack, Text } from "@chakra-ui/react";
import CContainer from "./wrapper/CContainer";

export default function DeviceInfo() {
  return (
    <CContainer
      borderRadius={12}
      flex={0}
      borderTop={"6px solid var(--divider)"}
      py={4}
    >
      <HStack justify={"space-between"} mb={2} px={6}>
        <Text as={"h2"} fontWeight={600}>
          Device Info
        </Text>
      </HStack>

      <CContainer w={"100%"} px={6}>
        <Text>T001</Text>
      </CContainer>
    </CContainer>
  );
}
