"use client";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "regenerator-runtime/runtime";
import { Header } from "../components/Header";
import { SectionMusic } from "../components/SectionMusic";
import { MusicContextProvider } from "../contexts/musicContext";
import { theme } from "../styles/theme";

export default function Page() {
  return (
    <MusicContextProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Container maxW="6xl">
          <SectionMusic title="Voce pesquisou por: " />
        </Container>
      </ChakraProvider>
    </MusicContextProvider>
  );
}
