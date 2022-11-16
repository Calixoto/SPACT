"use client";
import { ChakraProvider, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { SectionMusic } from "../components/SectionMusic";
import { theme } from "../styles/theme";

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="5xl">
        <SectionMusic title="Músicas Favoritas" />
      </Container>
    </ChakraProvider>
  );
};

export default Home;
