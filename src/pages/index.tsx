import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { SectionMusic } from "../components/SectionMusic";

const Home: NextPage = () => {
  // api.get(
  //   "/authorize?349e5de246bb4fd0af1a67344230008b=&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modiffy%20user-read-playback-state%20user-modify-playback-state"
  // );
  return (
    <>
      <Header />
      <Container maxW="5xl">
        <SectionMusic title="musicas" />
      </Container>
    </>
  );
};

export default Home;
