import { Checkbox, HStack, Text } from "@chakra-ui/react";
import ChartLineChart from "../dependent/chart/ChartLineChart";
import CContainer from "./wrapper/CContainer";

export default function DataGraphic() {
  // const dummy = {};
  // const [data] = useState<any | null>(dummy);
  const datasets = [
    {
      customTooltipLabels: [1, 3, -2, 4],
      data: [
        { x: "7-4-2023 00:50:03", y: 1 },
        { x: "7-4-2023 01:48:12", y: 3 },
        { x: "7-4-2023 02:41:05", y: -2 },
        { x: "7-4-2023 04:08:18", y: 4 },
      ],
      backgroundColor: "#E34436",
      borderWidth: 3,
      borderColor: "#E34436",
    },
    {
      customTooltipLabels: [-1, 1, -2, 1.2],
      data: [
        { x: "7-4-2023 00:50:03", y: -1 },
        { x: "7-4-2023 01:48:12", y: 1 },
        { x: "7-4-2023 04:08:18", y: 1.2 },
      ],
      backgroundColor: "#3ED180",
      borderWidth: 3,
      borderColor: "#3ED180",
    },
  ];

  // SX

  return (
    <CContainer flex={0} px={6} borderTop={"6px solid var(--divider)"} py={4}>
      <HStack justify={"space-between"} mb={2}>
        <Text as={"h2"} fontWeight={600}>
          Data Graphic
        </Text>

        <Checkbox colorScheme="dl" size={"sm"}>
          <Text fontSize={12}>Alert threshold line</Text>
        </Checkbox>
      </HStack>

      <CContainer>
        <ChartLineChart datasets={datasets} />
      </CContainer>
    </CContainer>
  );
}
