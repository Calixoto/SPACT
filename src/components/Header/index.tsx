import { Button, Container, Heading } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { SearchMusic } from "../SearchMusic";

export const Header = () => {
  return (
    <Container
      maxW="6xl"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={5}
      borderBottom="1px solid"
      borderColor="blue.100"
      mb={10}
    >
      <Heading as="h1" color="blue.500" fontWeight="600" fontSize="2xl">
        SPACT
      </Heading>
      <SearchMusic />
      <Button
        border="none"
        bg="none"
        borderRadius="100%"
        outline="none !important"
        p={0}
        h="fit-content"
        color="blue.900"
        _hover={{
          bg: "none",
          color: "blue.700",
        }}
      >
        <FaUserCircle size={32} />
      </Button>
    </Container>
  );
};
