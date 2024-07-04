import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";

export default function Dashboard() {
  // SX
  const contentBgColor = useContentBgColor();

  return (
    <CContainer>
      <Box borderBottom={"1px solid var(--divider2)"}>
        <Header title="Dashboard" />
      </Box>

      <CContainer p={5} bg={contentBgColor}>
        <SimpleGrid columns={2} gap={4}>
          
        </SimpleGrid>
      </CContainer>
    </CContainer>
  );
}
