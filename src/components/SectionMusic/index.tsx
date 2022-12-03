import { Heading, HStack, Link, Stack } from "@chakra-ui/react";
import ReachLink from "next/link";
import { useMusic } from "../../hooks/useMusic";
import { Card } from "../Card";

interface SectionMusicProps {
  title: string;
}

export const SectionMusic = ({ title }: SectionMusicProps) => {
  const { music } = useMusic();
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
        {/* {[1, 2, 3, 4].map((item) => ( */}
        {music &&
          music.items.map((item) => (
            <Card
              key={item.id.videoId}
              title={item.snippet.title}
              thumbnail={item.snippet.thumbnails.medium.url}
              videoId={item.id.videoId}
            />
          ))}
        {/* ))} */}
      </HStack>
    </Stack>
  );
};
