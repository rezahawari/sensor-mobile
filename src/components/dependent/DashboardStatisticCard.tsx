import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  label: string;
  value: string;
  icon: RemixiconComponentType;
}
export default function DashboardStatisticCard({
  label,
  value,
  icon,
  ...rest
}: Props) {
  return (
    <VStack bg={"var(--divider2)"} {...rest}>
      <HStack>
        <VStack borderRadius={"full"}>
          <Icon as={icon} />
        </VStack>

        <Text>{label}</Text>
      </HStack>

      <Text>{value}</Text>
    </VStack>
  );
}
