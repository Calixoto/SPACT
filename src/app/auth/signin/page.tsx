"use client";
import { Button, ChakraProvider, Flex, Link, Stack } from "@chakra-ui/react";
import ReachLink from "next/link";
import { Input } from "../../../components/Input";
import { theme } from "../../../styles/theme";

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.700"
          p="8"
          borderRadius={8}
          flexDir="column"
          gap={3}
        >
          <Stack spacing="4" position="relative" pb={7}>
            <Input color="white" name="email" type="email" label="E-mail" />
            <Input
              color="white"
              name="password"
              type="password"
              label="Senha"
            />
            <Link
              as={ReachLink}
              href="/auth/signup"
              color="blue.50"
              textTransform="uppercase"
              fontSize="xs"
              textDecoration="none !important"
              position="absolute"
              bottom={0}
              right={0}
              _hover={{
                color: "blue.100",
              }}
            >
              Cadastre-se
            </Link>
          </Stack>

          <Button type="submit" colorScheme="blue" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
