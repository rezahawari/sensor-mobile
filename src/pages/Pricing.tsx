import {
  Badge,
  Box,
  Center,
  HStack,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { RiCheckFill, RiCircleFill } from "@remixicon/react";
import { useState } from "react";
import Payment from "../components/dependent/Payment";
import Retry from "../components/dependent/Retry";
import NoData from "../components/independent/NoData";
import Skeleton from "../components/independent/Skeleton";
import CContainer from "../components/independent/wrapper/CContainer";
import Container from "../components/independent/wrapper/Container";
import { useContentBgColor, useLightDarkColor } from "../constant/colors";
import useDataState from "../hooks/useDataState";
import formatNumber from "../lib/formatNumber";

export default function Pricing() {
  const dummy = [
    {
      id: 1,
      label: "Premium",
      price: 3000000,
      duration: 1,
      benefits: [
        "Akses Semua Fitur Premium",
        "Dukungan Profesional Jam Kerja",
        "Pembaruan Bulanan",
      ],
      best_option: false,
    },
    {
      id: 2,
      label: "Pertamax",
      price: 8000000,
      duration: 3,
      benefits: [
        "Akses Fitur Premium +",
        "Dukungan VIP 24/7",
        "Pembaruan Triwulanan",
      ],
      best_option: true,
    },
  ];

  const { error, loading, data, retry } = useDataState<any>({
    initialData: dummy,
    url: "",
    dependencies: [],
  });

  const [selected, setSelected] = useState<any>(undefined);

  // SX
  const contentBgColor = useContentBgColor();
  const lightDarkColor = useLightDarkColor();

  return (
    <Container>
      <CContainer bg={contentBgColor} flex={1} p={5} pb={8}>
        <Text fontSize={20} fontWeight={600} mb={5}>
          Pilih Paket Anda
        </Text>

        {error && (
          <Box my={"auto"}>
            <Retry loading={loading} retry={retry} />
          </Box>
        )}
        {!error && (
          <CContainer gap={3} flex={1}>
            {loading && (
              <>
                {Array.from({ length: 10 }).map((_, i) => (
                  <Skeleton key={i} flex={1} mx={"auto"} />
                ))}
              </>
            )}
            {!loading && (
              <>
                {(!data || (data && data.length === 0)) && <NoData />}
                {(data || (data && data.length > 0)) && (
                  <>
                    {data.map((pricing: any, i: number) => (
                      <HStack
                        key={i}
                        bg={lightDarkColor}
                        borderRadius={12}
                        align={"stretch"}
                        overflow={"clip"}
                        className="clicky"
                        cursor={"pointer"}
                        boxShadow={
                          selected?.id === pricing.id
                            ? "0 0 0 1px var(--p500)"
                            : ""
                        }
                        onClick={() => {
                          setSelected(pricing);
                        }}
                      >
                        <CContainer p={4}>
                          <HStack>
                            <Text
                              fontSize={20}
                              fontWeight={700}
                              color={selected?.id === pricing.id ? "p.500" : ""}
                            >
                              Rp {formatNumber(pricing.price)}
                            </Text>

                            <Icon
                              as={RiCircleFill}
                              fontSize={6}
                              opacity={0.2}
                            />

                            <Text fontWeight={600} opacity={0.4}>
                              {pricing.duration} bulan
                            </Text>

                            {pricing.best_option && (
                              <Badge colorScheme="ap" py={0} px={1}>
                                Best
                              </Badge>
                            )}
                          </HStack>

                          <Text fontWeight={500}>{pricing.label}</Text>

                          <UnorderedList opacity={0.4} mt={2}>
                            {pricing.benefits.map(
                              (benefit: any, ii: number) => (
                                <ListItem key={ii}>
                                  <Text>{benefit}</Text>
                                </ListItem>
                              )
                            )}
                          </UnorderedList>
                        </CContainer>

                        <Center
                          bg={"p.500"}
                          p={2}
                          opacity={selected?.id === pricing.id ? 1 : 0}
                        >
                          <Icon
                            as={RiCheckFill}
                            fontSize={20}
                            color={lightDarkColor}
                          />
                        </Center>
                      </HStack>
                    ))}

                    <Payment selectedPricing={selected} />
                  </>
                )}
              </>
            )}
          </CContainer>
        )}
      </CContainer>
    </Container>
  );
}
