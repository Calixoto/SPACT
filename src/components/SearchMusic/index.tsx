import { Button, Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { useMusic } from "../../hooks/useMusic";

export const SearchMusic = () => {
  const musicSearchRef = useRef<HTMLInputElement>(null);
  const { getMusic, handleActiveListening, listening } = useMusic();

  // musicSearchRef.current?.value ? musicSearchRef.current?.value =  : null

  return (
    <Flex align="center" flex={1} maxW="50%" gap={2} position="relative">
      <Input
        placeholder="Procure por músicas"
        borderColor="blue.100"
        ref={musicSearchRef}
      />
      <Button
        bg="none"
        borderRadius="100%"
        outline="none !important"
        position="absolute"
        p={0}
        onClick={() => getMusic(musicSearchRef.current?.value)}
        color="blue.800"
        _hover={{
          bg: "none",
          color: "blue.600",
        }}
        right={50}
        zIndex={9}
      >
        <FaSearch size={24} />
      </Button>
      <Button
        border="1px solid"
        bg="none"
        borderRadius="100%"
        borderColor="blue.100"
        outline="none !important"
        p={0}
        color="blue.800"
        _hover={{
          bg: "blue.100",
          color: "blue.900",
        }}
        onClick={handleActiveListening}
      >
        <FaMicrophone size={24} color={listening ? "#ff0000" : undefined} />
      </Button>
    </Flex>
  );
};
