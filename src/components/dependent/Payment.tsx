import {
  Badge,
  Button,
  HStack,
  Icon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { RiCircleFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useLightDarkColor } from "../../constant/colors";
import useBackOnClose from "../../hooks/useBackOnClose";
import backOnClose from "../../lib/backOnClose";
import formatNumber from "../../lib/formatNumber";
import CContainer from "../independent/wrapper/CContainer";
import CustomDrawer from "../independent/wrapper/CustomDrawer";
import DisclosureHeader from "./DisclosureHeader";
import { useEffect } from "react";

interface Props {
  selectedPricing: any;
}

export default function Payment({ selectedPricing }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useBackOnClose("subs-payment", isOpen, onOpen, onClose);

  useEffect(() => {
    if (isOpen && !selectedPricing) {
      backOnClose();
    }
  }, [isOpen, selectedPricing]);

  // SX
  const lightDarkColor = useLightDarkColor();

  return (
    <>
      <Button
        mt={"auto"}
        size={"lg"}
        colorScheme="ap"
        className="btn-ap clicky"
        onClick={onOpen}
        isDisabled={!selectedPricing}
      >
        Lanjutkan Pembayaran
      </Button>

      <CustomDrawer
        id="subs-payment"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        header={<DisclosureHeader title={"Pembayaran"} />}
        footer={
          <>
            <Button className="btn-solid clicky" onClick={backOnClose}>
              Cancel
            </Button>
            <Button
              className="btn-ap clicky"
              colorScheme="ap"
              as={Link}
              to={"/home"}
            >
              Bayar
            </Button>
          </>
        }
      >
        <CContainer px={6}>
          <Text fontWeight={500} mb={3}>
            Paket Dipilih
          </Text>
          {selectedPricing && (
            <HStack
              bg={lightDarkColor}
              borderRadius={12}
              align={"stretch"}
              overflow={"clip"}
              boxShadow={"0 0 0 1px var(--divider3)"}
            >
              <CContainer p={4}>
                <HStack>
                  <Text fontSize={20} fontWeight={700} color={"p.500"}>
                    Rp {formatNumber(selectedPricing.price)}
                  </Text>

                  <Icon as={RiCircleFill} fontSize={6} opacity={0.2} />

                  <Text fontWeight={600} opacity={0.4}>
                    {selectedPricing.duration} bulan
                  </Text>

                  {selectedPricing.best_option && (
                    <Badge colorScheme="ap" py={0} px={1}>
                      Best
                    </Badge>
                  )}
                </HStack>

                <Text fontWeight={500}>{selectedPricing.label}</Text>

                <UnorderedList opacity={0.4} mt={2}>
                  {selectedPricing.benefits.map((benefit: any, ii: number) => (
                    <ListItem key={ii}>
                      <Text>{benefit}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </CContainer>
            </HStack>
          )}

          <Text fontWeight={500} mt={6} mb={3}>
            Metode Pembayaran
          </Text>
          <SimpleGrid></SimpleGrid>
        </CContainer>
      </CustomDrawer>
    </>
  );
}
