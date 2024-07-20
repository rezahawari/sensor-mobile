import { StackProps, VStack } from "@chakra-ui/react";
import DebugTools from "../../DebugTools";

interface Props extends StackProps {
  children?: any;
}

export default function Container({ children, ...props }: Props) {
  return (
    <>
      <DebugTools />

      <VStack
        align={"stretch"}
        w={"100%"}
        minH={"100vh"}
        maxW={"720px"}
        mx={"auto"}
        flex={1}
        {...props}
      >
        {children}
      </VStack>
    </>
  );
}
