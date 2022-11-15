import { Button, Flex, Input } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";

export const SearchMusic = () => {
  return (
    <Flex align="center" flex={1} maxW="50%" gap={2}>
      <Input placeholder="Procure por músicas" borderColor="blue.100" />
      <Button
        border="none"
        bg="none"
        borderRadius="100%"
        outline="none !important"
        p={0}
        // h="fit-content"
        color="blue.900"
        _hover={{
          bg: "blue.50",
          color: "blue.700",
        }}
      >
        <FaMicrophone size={24} />
      </Button>
    </Flex>
  );
};
