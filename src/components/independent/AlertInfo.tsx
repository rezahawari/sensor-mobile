import { HStack, Text } from "@chakra-ui/react";
import CContainer from "./wrapper/CContainer";

export default function AlertInfo() {
  return (
    <CContainer flex={0} borderTop={"6px solid var(--divider)"} py={4}>
      <HStack justify={"space-between"} mb={2} px={6}>
        <Text as={"h2"} fontWeight={600}>
          Alert Info
        </Text>
      </HStack>

      <CContainer w={"100%"} px={6}>
        <Text>Current data is stable, no alarms</Text>
      </CContainer>
    </CContainer>
  );
}
