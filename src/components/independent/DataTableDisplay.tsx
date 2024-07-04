import {
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import CContainer from "./wrapper/CContainer";
import { useState } from "react";

export default function DataTableDisplay() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft !== 0) {
      setIsScrolling(true);
      e.stopPropagation();
    } else {
      setIsScrolling(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isScrolling) {
      e.stopPropagation();
    }
  };

  // SX

  return (
    <CContainer flex={0} borderTop={"6px solid var(--divider)"} py={4}>
      <HStack justify={"space-between"} mb={2} px={6}>
        <Text as={"h2"} fontWeight={600}>
          Data Table Display
        </Text>
      </HStack>

      <CContainer
        w={"100%"}
        overflowX={"auto"}
        onWheel={handleScroll}
        onTouchMove={handleTouchMove}
        className="noScroll"
      >
        <Table>
          <Thead>
            <Tr>
              <Th>Device Name</Th>
              <Th textAlign={"center"}>X Tilt(°)</Th>
              <Th textAlign={"center"}>Y Tilt(°)</Th>
              <Th textAlign={"center"}>∆ X Distance(mm)</Th>
              <Th textAlign={"center"}>∆ Y Distance(mm)</Th>
              <Th textAlign={"center"}>Time</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>T001</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"} whiteSpace={"nowrap"}>
                7-4-2023 00:50:03
              </Td>
            </Tr>
            <Tr>
              <Td>T001</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"} whiteSpace={"nowrap"}>
                7-4-2023 00:50:03
              </Td>
            </Tr>
            <Tr>
              <Td>T001</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"} whiteSpace={"nowrap"}>
                7-4-2023 00:50:03
              </Td>
            </Tr>
            <Tr>
              <Td>T001</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"} whiteSpace={"nowrap"}>
                7-4-2023 00:50:03
              </Td>
            </Tr>
            <Tr>
              <Td>T001</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"}>-0.298123</Td>
              <Td textAlign={"center"} whiteSpace={"nowrap"}>
                7-4-2023 00:50:03
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </CContainer>
    </CContainer>
  );
}
