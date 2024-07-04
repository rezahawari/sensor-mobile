import { HStack, Image, Text } from "@chakra-ui/react";
import CContainer from "./wrapper/CContainer";
import { useState } from "react";

export default function DeviceLocation() {
  const dummy = [
    "/images/device.jpg",
    "/images/device.jpg",
    "/images/device.jpg",
    "/images/device.jpg",
    "/images/device.jpg",
    "/images/device.jpg",
    "/images/device.jpg",
  ];
  const [data] = useState<string[] | null>(dummy);

  return (
    <CContainer
      borderRadius={12}
      flex={0}
      borderTop={"6px solid var(--divider)"}
      py={4}
    >
      <HStack justify={"space-between"} mb={2} px={6}>
        <Text as={"h2"} fontWeight={600}>
          Device Location
        </Text>
      </HStack>

      <CContainer
        w={"100%"}
        overflowX={"auto"}
        onTouchMove={(e) => {
          e.stopPropagation();
        }}
        scrollSnapType={"x mandatory"}
        className="noScroll"
      >
        <HStack px={6} w={"max-content"}>
          {data?.map((img, i) => (
            <Image
              scrollSnapAlign={"center"}
              minW={"calc(100vw - 64px)"}
              key={i}
              src={img}
            />
          ))}
        </HStack>
      </CContainer>
    </CContainer>
  );
}
