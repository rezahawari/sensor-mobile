import { HStack } from "@chakra-ui/react";
import { useRef } from "react";
import CContainer from "../../components/independent/wrapper/CContainer";
import Container from "../../components/independent/wrapper/Container";
import Login from "../Login";
import Register from "../Register";

export default function Landing() {
  const containerRef = useRef(null);

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
