import { Heading, HStack, Stack } from "@chakra-ui/react";
// import ReachLink from "next/link";
import { useMusic } from "../../hooks/useMusic";
import { Card } from "../Card";

interface SectionMusicProps {
  title: string;
}

export const SectionMusic = ({ title }: SectionMusicProps) => {
  const { music, searched } = useMusic();

  return (
    <Stack>
      <HStack align="flex-end" justifyContent="space-between">
        <Heading>{title + searched} </Heading>
      </HStack>
      <HStack
        spacing={4}
        justifyContent={["center", "center", "space-between"]}
        flexWrap="wrap"
        alignItems="center"
        gap={4}
      >
        {music &&
          music.items.map((item) => (
            <Card
              key={item.id.videoId}
              title={item.snippet.title}
              thumbnail={item.snippet.thumbnails.medium.url}
              videoId={item.id.videoId}
            />
          ))}
      </HStack>
    </Stack>
  );
};
