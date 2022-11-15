import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";

export default function CreateUser() {
  return (
    <Box>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Box flex="1" borderRadius={8} bg="gray.700" p="8">
            <Heading color="white" size="lg" fontWeight="normal">Criar usuário</Heading>

            <Divider my="6" borderColor="white" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input color="white" name="name" label="Nome completo" />
                <Input color="white" name="email" type="email" label="E-mail" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input color="white" name="password" type="password" label="Senha" />
                <Input color="white" name="password_confirmation" type="password" label="Confirmação da senha" />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="blue">Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}