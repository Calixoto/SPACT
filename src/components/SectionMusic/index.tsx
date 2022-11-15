import { Heading, HStack, Link, Stack } from "@chakra-ui/react";
import ReachLink from "next/link";
import { Card } from "../Card";

interface SectionMusicProps {
  title: string;
}

export const SectionMusic = ({ title }: SectionMusicProps) => {
  return (
    <Stack>
      <HStack align="center" justifyContent="space-between">
        <Heading>{title}</Heading>
        <Link as={ReachLink} href="#">
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
