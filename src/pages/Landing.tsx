import { HStack } from "@chakra-ui/react";
import { useRef } from "react";
import CContainer from "../components/independent/wrapper/CContainer";
import Container from "../components/independent/wrapper/Container";
import { useLightDarkColor } from "../constant/colors";
import Login from "./Login";
import Register from "./Register";

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
        bg={"dark"}
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
          border={"1px solid var(--divider)"}
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
