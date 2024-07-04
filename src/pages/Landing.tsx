import { HStack } from "@chakra-ui/react";
import { useRef } from "react";
import CContainer from "../components/independent/wrapper/CContainer";
import Container from "../components/independent/wrapper/Container";
import Login from "./Login";
import Register from "./Register";
import { useLightDarkColor } from "../constant/colors";

export default function Landing() {
  const containerRef = useRef(null);

  // SX
  const lightDarkColor = useLightDarkColor();

  return (
    <Container>
      <HStack
        ref={containerRef}
        h={"100vh"}
        w={"100%"}
        scrollSnapType={"x mandatory"}
        overflowX={"auto"}
        className="noScroll"
        align={"stretch"}
        gap={0}
        bg={"p.500"}
      >
        <CContainer
          h={"calc(50% + 8px)"}
          overflowY={"auto"}
          p={6}
          pb={8}
          borderRadius={"20px 20px 0 0"}
          bg={lightDarkColor}
          position={"absolute"}
          bottom={0}
          zIndex={1}
        />

        <CContainer minW={"100%"} scrollSnapAlign={"center"}>
          <Login containerRef={containerRef} />
        </CContainer>

        <CContainer minW={"100%"} scrollSnapAlign={"center"}>
          <Register containerRef={containerRef} />
        </CContainer>
      </HStack>
    </Container>
  );
}
