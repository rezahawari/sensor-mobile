import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../../components/dependent/Header";
import CContainer from "../../../components/independent/wrapper/CContainer";
import {
  useContentBgColor,
  useDarkLightColor,
  useLightDarkColor,
} from "../../../constant/colors";
import SingleSelectCompanyDrawer from "../../../components/dependent/input/dedicated/SingleSelectCompanyDrawer";
import { useState } from "react";
import SingleSelectModuleDrawer from "../../../components/dependent/input/dedicated/SingleSelectModuleDrawer";
import SingleSelectProjectDrawer from "../../../components/dependent/input/dedicated/SingleSelectProjectDrawer";
import SingleSelectDeviceNameDrawer from "../../../components/dependent/input/dedicated/SingleSelectDeviceNameDrawer";

interface Interface__Config {
  company: any;
  project: any;
  module: any;
  device_name: any;
}

export default function Home() {
  const defaultConfig: Interface__Config = {
    company: undefined,
    project: undefined,
    module: undefined,
    device_name: undefined,
  };
  const [config, setConfig] = useState<Interface__Config>(defaultConfig);

  // SX
  const contentBgColor = useContentBgColor();
  const darkLightColor = useDarkLightColor();
  const lightDarkColor = useLightDarkColor();

  return (
    <CContainer>
      <Box bg={darkLightColor} borderBottom={"1px solid var(--divider2)"}>
        <Header bg={"transparent"} color={lightDarkColor} title="Dashboard" />
      </Box>

      <CContainer bg={darkLightColor} p={5} flex={0}>
        <SimpleGrid columns={1} gap={2}>
          <SingleSelectCompanyDrawer
            id="select-company-drawer"
            name="company"
            onConfirm={(inputValue) => {
              setConfig((ps) => ({ ...ps, company: inputValue }));
            }}
            inputValue={config.company}
            placeholder="Pilih Company"
            color={lightDarkColor}
          />

          <SingleSelectProjectDrawer
            id="select-project-drawer"
            name="project"
            onConfirm={(inputValue) => {
              setConfig((ps) => ({ ...ps, project: inputValue }));
            }}
            inputValue={config.project}
            placeholder="Pilih Project"
            color={lightDarkColor}
          />

          <SingleSelectModuleDrawer
            id="select-module-drawer"
            name="module"
            onConfirm={(inputValue) => {
              setConfig((ps) => ({ ...ps, module: inputValue }));
            }}
            inputValue={config.module}
            placeholder="Pilih Module"
            color={lightDarkColor}
          />

          <SingleSelectDeviceNameDrawer
            id="select-device-name-drawer"
            name="device_name"
            onConfirm={(inputValue) => {
              setConfig((ps) => ({ ...ps, device_name: inputValue }));
            }}
            inputValue={config.device_name}
            placeholder="Pilih Device Name"
            color={lightDarkColor}
          />
        </SimpleGrid>
      </CContainer>

      <CContainer p={5} bg={contentBgColor}>
        <CContainer bg={lightDarkColor} borderRadius={12} p={4} flex={0}>
          <Text as={"h2"} fontWeight={600} mb={4}>
            Title Content
          </Text>

          <CContainer>
            <Text opacity={0.4}>Contentnya Pekok</Text>
          </CContainer>
        </CContainer>
      </CContainer>
    </CContainer>
  );
}
