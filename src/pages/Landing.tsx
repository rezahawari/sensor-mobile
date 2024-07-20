import { HStack, Image } from "@chakra-ui/react";
import { useRef } from "react";
import CContainer from "../components/independent/wrapper/CContainer";
import Container from "../components/independent/wrapper/Container";
import Login from "../components/independent/Login";
import Register from "../components/independent/Register";

export default function Landing() {
  const containerRef = useRef(null);

  // SX

  return (
    <Container justify={"space-between"}>
      <Image src="/logo192.png" borderRadius={"full"} w={"100px"} m={"auto"} />
      <HStack
        ref={containerRef}
        minH={"50%"}
        w={"100%"}
        scrollSnapType={"x mandatory"}
        overflowX={"auto"}
        className="noScroll"
        align={"stretch"}
        gap={0}
      >
        <CContainer h={"100%"} minW={"100%"} scrollSnapAlign={"center"}>
          <Login containerRef={containerRef} />
        </CContainer>

        <CContainer h={"100%"} minW={"100%"} scrollSnapAlign={"center"}>
          <Register containerRef={containerRef} />
        </CContainer>
      </HStack>
    </Container>
  );
}
