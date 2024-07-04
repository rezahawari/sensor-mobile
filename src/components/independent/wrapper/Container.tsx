import { StackProps, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  children: any;
}

export default function Container({ children, ...props }: Props) {
  return (
    <VStack
      align={"stretch"}
      w={"100%"}
      maxW={"720px"}
      mx={"auto"}
      flex={1}
      {...props}
    >
      {children}
    </VStack>
  );
}
