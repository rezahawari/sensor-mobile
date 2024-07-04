import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";
import DashboardStatisticCard from "../../../components/dependent/DashboardStatisticCard";
import { dashboardstats } from "../../../constant/dashboardstatistic";

export default function Dashboard() {
  // SX
  const contentBgColor = useContentBgColor();

  return (
    <CContainer>
      <Box borderBottom={"1px solid var(--divider2)"}>
        <Header title="Dashboard" />
      </Box>

      <CContainer p={5} bg={contentBgColor} zIndex={2}>
        <SimpleGrid w={"100%"} columns={[1]}>
          {dashboardstats.map((item) => (
            <DashboardStatisticCard
              key={item.id}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </SimpleGrid>
      </CContainer>
    </CContainer>
  );
}
