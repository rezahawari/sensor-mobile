import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "../../../components/dependent/Header";
import SingleSelectCompanyDrawer from "../../../components/dependent/input/dedicated/SingleSelectCompanyDrawer";
import SingleSelectDeviceNameDrawer from "../../../components/dependent/input/dedicated/SingleSelectDeviceNameDrawer";
import SingleSelectModuleDrawer from "../../../components/dependent/input/dedicated/SingleSelectModuleDrawer";
import SingleSelectProjectDrawer from "../../../components/dependent/input/dedicated/SingleSelectProjectDrawer";
import CContainer from "../../../components/independent/wrapper/CContainer";
import {
  useContentBgColor,
  useDarkLightColor,
  useLightDarkColor,
} from "../../../constant/colors";
import DataGraphic from "./sections/DataGraphic";

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
      {/* Header */}
      <Box bg={darkLightColor} borderBottom={"1px solid var(--divider2)"}>
        <Header bg={"transparent"} color={lightDarkColor} title="Dashboard" />
      </Box>

      {/* Config */}
      <CContainer bg={darkLightColor} flex={0}>
        <Accordion allowToggle defaultIndex={0}>
          <AccordionItem border={"none"}>
            <AccordionButton
              as={Button}
              className="btn"
              color={lightDarkColor}
              justifyContent={"space-between"}
              borderRadius={0}
              size={"lg"}
              _expanded={{ bg: "var(--divider) !important" }}
            >
              <Text>Config</Text>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p={5}>
              <SimpleGrid columns={1} gap={2}>
                <SingleSelectCompanyDrawer
                  id="select-company-drawer"
                  name="company"
                  onConfirm={(inputValue) => {
                    setConfig((ps) => ({ ...ps, company: inputValue }));
                  }}
                  inputValue={config.company}
                  placeholder="Select Company"
                  color={lightDarkColor}
                />

                <SingleSelectProjectDrawer
                  id="select-project-drawer"
                  name="project"
                  onConfirm={(inputValue) => {
                    setConfig((ps) => ({ ...ps, project: inputValue }));
                  }}
                  inputValue={config.project}
                  placeholder="Select Project"
                  color={lightDarkColor}
                />

                <SingleSelectModuleDrawer
                  id="select-module-drawer"
                  name="module"
                  onConfirm={(inputValue) => {
                    setConfig((ps) => ({ ...ps, module: inputValue }));
                  }}
                  inputValue={config.module}
                  placeholder="Select Module"
                  color={lightDarkColor}
                />

                <SingleSelectDeviceNameDrawer
                  id="select-device-name-drawer"
                  name="device_name"
                  onConfirm={(inputValue) => {
                    setConfig((ps) => ({ ...ps, device_name: inputValue }));
                  }}
                  inputValue={config.device_name}
                  placeholder="Select Device Name"
                  color={lightDarkColor}
                />
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CContainer>

      {/* Content */}
      <CContainer p={5} bg={contentBgColor} overflowY={"auto"}>
        <DataGraphic />
      </CContainer>
    </CContainer>
  );
}
