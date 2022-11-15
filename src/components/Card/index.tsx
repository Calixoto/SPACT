import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CardProps {
  thumbnail: string;
  title: string;
}

export const Card = ({ title, thumbnail }: CardProps) => {
  return (
    <Box position="relative" border="1px solid red" w="100%">
      <Image
        src={thumbnail}
        alt=""
        width={250}
        height={250}
        style={{ width: "100%", height: "100%" }}
      />
      <Text
        bg="blue.50"
        opacity={0.7}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={2}
        // zIndex={99}
        // filter="blur(80px)"
      >
        {title}
      </Text>
    </Box>
  );
};
