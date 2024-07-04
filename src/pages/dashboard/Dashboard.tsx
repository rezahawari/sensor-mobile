import { HStack, Heading, Image, Switch, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Dashboard() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <VStack w={"100%"} p={4}>
      <HStack justify={"space-between"}>
        <HStack>
          <Image src="/logoWhiteBg.png" w={"100%"} maxW={"28px"} />
          <Text as={"b"}>Distro Studio</Text>
        </HStack>

        <Switch
          sx={{
            "span > span:first-child::after": {
              content: checked ? '"☀"' : '"🌑"',
            },
          }}
          size="lg"
          isChecked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </HStack>
    </VStack>
  );
}
