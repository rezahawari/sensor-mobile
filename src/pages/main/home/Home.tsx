import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { RiEqualizer3Line } from "@remixicon/react";
import { useState } from "react";
import SingleSelectCompanyDrawer from "../../../components/dependent/input/dedicated/SingleSelectCompanyDrawer";
import SingleSelectDeviceNameDrawer from "../../../components/dependent/input/dedicated/SingleSelectDeviceNameDrawer";
import SingleSelectModuleDrawer from "../../../components/dependent/input/dedicated/SingleSelectModuleDrawer";
import SingleSelectProjectDrawer from "../../../components/dependent/input/dedicated/SingleSelectProjectDrawer";
import SensorMaps from "../../../components/dependent/SensorMaps";
import CContainer from "../../../components/independent/wrapper/CContainer";
import { useContentBgColor } from "../../../constant/colors";
import { iconSize } from "../../../constant/sizes";

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

  return (
    <CContainer>
      {/* Content */}
      <CContainer bg={contentBgColor} overflowY={"auto"}>
        <SensorMaps />
      </CContainer>

      {/* Config */}
      <Accordion
        allowToggle
        // defaultIndex={0}
        position={"fixed"}
        left={0}
        bottom={"85px"}
        w={"100%"}
        bg={"dark"}
      >
        <AccordionItem border={"none"}>
          <AccordionButton
            as={Button}
            className="btn"
            color={"white"}
            justifyContent={"space-between"}
            borderRadius={0}
            size={"lg"}
            _expanded={{ bg: "var(--divider) !important" }}
          >
            <HStack>
              <Icon as={RiEqualizer3Line} fontSize={iconSize} />
              <Text mr={1}>Config</Text>
              {Object.keys(config).map((key) => {
                if (
                  key in config &&
                  (key === "company" || key === "device_name") &&
                  config[key as keyof Interface__Config]
                ) {
                  return (
                    <Badge
                      key={key}
                      colorScheme={key === "company" ? "purple" : "blue"}
                    >
                      {config[key as keyof Interface__Config].label}
                    </Badge>
                  );
                }
                return null;
              })}
            </HStack>
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
                color={"white"}
                _focus={{
                  border: "1px solid",
                  borderColor: "white !important",
                  boxShadow: "none !important",
                }}
              />

              <SingleSelectProjectDrawer
                id="select-project-drawer"
                name="project"
                onConfirm={(inputValue) => {
                  setConfig((ps) => ({ ...ps, project: inputValue }));
                }}
                inputValue={config.project}
                placeholder="Select Project"
                color={"white"}
                _focus={{
                  border: "1px solid",
                  borderColor: "white !important",
                  boxShadow: "none !important",
                }}
              />

              <SingleSelectModuleDrawer
                id="select-module-drawer"
                name="module"
                onConfirm={(inputValue) => {
                  setConfig((ps) => ({ ...ps, module: inputValue }));
                }}
                inputValue={config.module}
                placeholder="Select Module"
                color={"white"}
                _focus={{
                  border: "1px solid",
                  borderColor: "white !important",
                  boxShadow: "none !important",
                }}
              />

              <SingleSelectDeviceNameDrawer
                id="select-device-name-drawer"
                name="device_name"
                onConfirm={(inputValue) => {
                  setConfig((ps) => ({ ...ps, device_name: inputValue }));
                }}
                inputValue={config.device_name}
                placeholder="Select Device Name"
                color={"white"}
                _focus={{
                  border: "1px solid",
                  borderColor: "white !important",
                  boxShadow: "none !important",
                }}
              />
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </CContainer>
  );
}
