import { Heading, HStack, Link, Stack } from "@chakra-ui/react";
import ReachLink from "next/link";
import { Card } from "../Card";

interface SectionMusicProps {
  title: string;
}

export const SectionMusic = ({ title }: SectionMusicProps) => {
  return (
    <Stack>
      <HStack align="flex-end" justifyContent="space-between">
        <Heading>{title}</Heading>
        <Link
          as={ReachLink}
          href="#"
          color="blue.700"
          fontWeight={700}
          _hover={{
            textDecoration: "none",
            color: "blue.600",
            letterSpacing: "0.1px",
          }}
        >
          Ver mais...
        </Link>
      </HStack>
      <HStack spacing={4}>
        {[1, 2, 3, 4].map((item) => (
          <Card
            key={item}
            title="musica 1"
            thumbnail="https://github.com/calixoto.png"
          />
        ))}
      </HStack>
    </Stack>
  );
};
