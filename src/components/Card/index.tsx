import { Box, Button, Text } from "@chakra-ui/react";
import download from "downloadjs";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
  thumbnail: string;
  title: string;
  videoId: string;
}

export const Card = ({ title, thumbnail, videoId }: CardProps) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: videoId, type: "mp3" }),
    };
    await fetch("http://localhost:3000/api/ytdl", requestOptions)
      .then((res) => res.json())
      .then(async (data) => {
        await fetch(data.urlSigned)
          .then((response) => response.blob())
          .then((blob) => {
            download(blob, `${title}.mp3`, "audio/mpeg");
            setDownloading(false);
          });
      });
  };
  return (
    <Box w="100%" h="239px" maxW="250px" bg="gray.50" p={3} borderRadius={16}>
      <Image
        src={thumbnail}
        alt=""
        loading="lazy"
        width={212}
        height={159}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "212px",
          maxHeight: "159px",
          borderRadius: "16px",
        }}
        quality={100}
        placeholder="blur"
        blurDataURL="L6PZfSi_.AyE_3t7t7R**0o#DgR4"
        decoding="async"
      />
      <Text
        mt={2}
        style={{
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          display: "-webkit-box",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {title}
      </Text>
      <Button onClick={handleDownload} disabled={downloading}>
        {downloading ? "Baixando" : "Download"}
      </Button>
    </Box>
  );
};
